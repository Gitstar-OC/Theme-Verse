from config import db

class Contact(db.model):
    id = db.Column(db.Integer, primary_key=True)
    Name = db.Column(db.String(80), unique=False, nullable=False)
    Email = db.Column(db.String(80), unique=True, nullable=False)
    Platform = db.Column(db.String(120), unique=True, nullable=False)
    Position = db.Column(db.String(80), unique= False, nullable=False)
    Company = db.Column(db.String(80), unique= False, nullable=False)
    Link = db.Column(db.String(200), unique=True, nullable=False)
    Message = db.Column(db.String(150), unique= False, nullable=False)


    def to_json(self):
        return {
            "id": self.id,
            "Name": self.Name,
            "Email": self.Email,
            "Position": self.Position,
            "Company": self.Company,
            "Messagae": self.Message,
            "Platform": self.Platform,
            "Link": self.Link
        }

