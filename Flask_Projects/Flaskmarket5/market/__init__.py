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
app.config['SECRET_KEY'] = 'fe856aabe5136e53faffd77d'

from market import routes
