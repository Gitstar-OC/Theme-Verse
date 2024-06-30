# from flask import Flask, request, jsonify
import flask 
# from flask import request, jsonify
from config import app, db
from Contact import models
from datetime import datetime, timedelta

@app.route("/contacts", methods=["GET"])
def get_contacts():
    contacts = Contact.query.all()
    json_contacts = list(map(lambda x: x.to_json(), contacts))
    return jsonify({"contacts": json_contacts})

@app.route("/api/contact", methods=["POST"])
def add_contact():
    data = flask.request.get_json()
    email = data['Email']
    one_day_ago = datetime.now() - timedelta(days=1)
    recent_messages = Contact.query.filter(Contact.Email == email, Contact.timestamp > one_day_ago).count()

    if recent_messages >= 3:
        return flask.jsonify({"error": "You can only send 3 messages per day."}), 429

    new_contact = Contact(
        Name=data['name'],
        Email=data['email'],
        Platform=data['socialMedia'],
        Position=data['position'],
        Company=data['company'],
        Link=data['figmaLink'],
        Message=data['message']
    )
    db.session.add(new_contact)
    db.session.commit()
    return flask.jsonify({"message": "Contact added successfully!"}), 201

if __name__ == "__main__":
    app.run(debug=True)
