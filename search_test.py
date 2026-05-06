import psycopg2
from pgvector.psycopg2 import register_vector
from sentence_transformers import SentenceTransformer

conn = psycopg2.connect(
            dbname="issues_db",
            user="postgres",
            password="postgres",
            host="localhost",
            port="5433",
)

register_vector(conn)

cur = conn.cursor()

model=SentenceTransformer('all-MiniLM-L6-v2')

query = "flooded road after rain"
query_embedding=model.encode(query)

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

results=cur.fetchall()

for row in  results:
    print (row)
    print("---")

cur.close()
conn.close()

