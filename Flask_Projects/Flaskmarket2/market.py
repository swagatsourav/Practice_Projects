from flask import Flask,render_template
from flask_sqlalchemy import SQLAlchemy


# Note: To call this app set the system Variable set FLASK_APP=market.py.
# 	• Setting up environmental variable before run:
# 	In Windows:
# 		○ set FLASK_APP=market.py
# 		○ flask run
# 		○ set FLASK_DEBUG=1
# 	• Debug mode on(debug mode to synchronize data):
# 		○ set FLASK_DEBUG=1
# 		○ flask run

app = Flask(__name__)
db = SQLAlchemy(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///market.db'

class Item(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(length=30),nullable=False, unique=True)
    price = db.Column(db.Integer(),nullable=False)
    barcode = db.Column(db.String(length=12),nullable=False,unique=True)
    description = db.Column(db.String(length=1024),nullable=False,unique=True)

    def __repr__(self):
        return f'Item {self.name}'



@app.route("/")
@app.route("/home")
def home_page():
    return render_template("home.html")

@app.route("/market")
def market_page():
    items = Item.query.all()
    return render_template("market.html",items=items)

