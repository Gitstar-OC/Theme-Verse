from flask import Flask, request, jsonify
from config import app, db
from models import Contact
from datetime import datetime, timedelta

@app.route("/contacts", methods=["GET"])
def get_contacts():
    contacts = Contact.query.all()
    json_contacts = list(map(lambda x: x.to_json(), contacts))
    return jsonify({"contacts": json_contacts})

@app.route("/api/contact", methods=["POST"])
def add_contact():
    data = request.get_json()
    email = data['email']
    one_day_ago = datetime.now() - timedelta(days=1)
    recent_messages = Contact.query.filter(Contact.Email == email, Contact.timestamp > one_day_ago).count()

    if recent_messages >= 3:
        return jsonify({"error": "You can only send 3 messages per day."}), 429

    new_contact = Contact(
        Name=data['name'],
        Email=data['email'],
        Platform=data['socialMedia'],
        Position=data['position'],
        Company=data['company'],
        Link=data['figmaLink'],
        Message=data['message'],
        timestamp=datetime.now()  # Ensure timestamp is set
    )
    db.session.add(new_contact)
    db.session.commit()
    return jsonify({"message": "Contact added successfully!"}), 201

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)
