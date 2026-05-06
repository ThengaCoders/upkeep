from fastapi import FastAPI
import psycopg2
from sentence_transformers import SentenceTransformer
from datetime import datetime
from pgvector.psycopg2 import register_vector
from pydantic import BaseModel

class SearchRequest(BaseModel):
    query: str

class IssueRequest(BaseModel):
    title: str
    description: str
    category: str
    photo_url: str = ""
    location: str = ""
    latitude: float | None = None
    longitude: float | None = None

app = FastAPI()
model = SentenceTransformer('all-MiniLM-L6-v2')

conn = psycopg2.connect(
    dbname="issues_db",
    user="postgres",
    password="postgres",
    host="localhost",
    port="5433"
)
register_vector(conn)
cur = conn.cursor()

@app.post("/check-issue")
def check_issue(data: dict):
    title = data["title"]
    description = data["description"]
    category = data["category"]
    latitude = data.get("latitude")
    longitude = data.get("longitude")

    text = title + " " + description + " " + category
    embedding = model.encode(text)

    if latitude is not None and longitude is not None:
        cur.execute("""
            SELECT i.id, i.issue_no, i.title, i.description, i.location,
                   e.embedding <-> %s AS semantic_distance,
                   earth_distance(
                       ll_to_earth(latitude, longitude),
                       ll_to_earth(%s, %s)
                   ) AS geo_distance
            FROM issue_embeddings e
            JOIN issues i ON i.id = e.issue_id
            WHERE i.latitude IS NOT NULL
            ORDER BY semantic_distance
            LIMIT 5;
        """, (embedding, latitude, longitude))

    similar = cur.fetchall()
    return {
        "matches": [
            {
                "id": r[0],
                "issue_no": r[1],
                "title": r[2],
                "description": r[3],
                "location": r[4],
                "semantic_distance": r[5],
                "geo_distance": r[6]
            }
            for r in similar
        ]
    }

@app.post("/add-issue")
def add_issue(data: IssueRequest):
    text = data.title + " " + data.description + " " + data.category
    embedding = model.encode(text)

    cur.execute("""
        INSERT INTO issues (title, description, category, photo_url, location, latitude, longitude)
        VALUES (%s, %s, %s, %s, %s, %s, %s)
        RETURNING id;
    """, (data.title, data.description, data.category, data.photo_url, data.location, data.latitude, data.longitude))

    issue_id = cur.fetchone()[0]
    year = datetime.now().year
    issue_no = f"{year}-{issue_id:05d}"

    cur.execute(
        "UPDATE issues SET issue_no = %s WHERE id = %s", (issue_no, issue_id)
    )

    cur.execute("""
        INSERT INTO issue_embeddings (issue_id, embedding)
        VALUES (%s, %s)
        ON CONFLICT (issue_id) DO NOTHING;
    """, (issue_id, embedding))

    conn.commit()  # ✅ before return
    return {"issue_no": issue_no}

@app.post("/search")
def search(request: SearchRequest):
    query_embedding = model.encode(request.query)

    cur.execute("""
        WITH ranked AS (
            SELECT i.id, i.title, i.description, i.location, i.latitude, i.longitude,
                   e.embedding <-> %s AS distance
            FROM issue_embeddings e
            JOIN issues i ON i.id = e.issue_id
        )
        SELECT * FROM ranked
        ORDER BY distance
        LIMIT 5;
    """, (query_embedding,))

    results = cur.fetchall()
    return {"results": [
        {
            "id": row[0],
            "title": row[1],
            "description": row[2],
            "location": row[3],
            "latitude": row[4],
            "longitude": row[5],
            "distance": row[6]
        }
        for row in results
    ]}
