from flask import Flask

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

@app.route("/")
def hello_world():
    return "<h1>Hello, Worldd!</h1>" 

# Dynamic name
@app.route("/about/<username>")
def return_about(username):
    return f"<h1>This is from about page of {username}</h1>"