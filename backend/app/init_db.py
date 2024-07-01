from config import db, app
from models import Contact  

with app.app_context():
    db.create_all()
    print("Database initialized.")
