from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager

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
bcrypt = Bcrypt(app)
login_manager=LoginManager(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///market.db'
app.config['SECRET_KEY'] = 'fe856aabe5136e53faffd77d'

from market import routes
