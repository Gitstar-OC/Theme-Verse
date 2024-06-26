# init_db.py
from config import db
db.create_all()
print("Database initialized.")
