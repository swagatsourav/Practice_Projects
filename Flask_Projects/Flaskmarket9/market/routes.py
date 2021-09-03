from market import app
from flask import render_template,redirect,url_for,flash,request
from market.models import Item, User
from market.forms import RegisterForm,LoginForm,PuchaseItemForm,SellItemForm
from market import  db
from flask_login import login_user, logout_user, login_required, current_user

@app.route("/")
@app.route("/home")
def home_page():
    return render_template("home.html")

@app.route("/market", methods=['GET','POST'])
@login_required
def market_page():
    purchase_form = PuchaseItemForm()
    if request.method == "POST":
        purchased_item = request.form.get('purchased_item')
        p_item_obj = Item.query.filter_by(name=purchased_item).first()
        if p_item_obj:
            if current_user.can_purchase(p_item_obj.price):
                p_item_obj.buy(current_user)
                flash(f"Congratulations! You purchased {p_item_obj.name} for {p_item_obj.price}$", category="success")
            else:
                flash(f"Oops! You have insufficient funds to buy this item.", category="danger")
        return redirect(url_for("market_page"))
    if request.method == 'GET':
        items = Item.query.filter_by(owner=None)
        return render_template("market.html",items=items, purchase_form=purchase_form)

@app.route("/register", methods=['GET','POST'])
def register_page():
    form = RegisterForm()
    if form.validate_on_submit():
        user_to_create = User(username=form.username.data,
                              email_address=form.email_address.data,
                              password = form.password1.data)
        db.session.add(user_to_create)
        db.session.commit()
        login_user(user_to_create)
        flash(f"Account created successfully! You are now logged in as {user_to_create.username}", category="success")
        return redirect(url_for('market_page'))
    if form.errors:  #form.errors provides a dictionary.
        for err_msg in form.errors.values():
            flash(f'Error occured in creating the user: {err_msg}' , category='danger') 

    return render_template('register.html',form = form)
    
@app.route("/login", methods=['GET','POST'])
def login_page():
    form = LoginForm()
    if form.validate_on_submit():
        attempted_user = User.query.filter_by(username=form.username.data).first()
        if attempted_user and attempted_user.check_password_correction(
            attempted_password=form.password.data):
            login_user(attempted_user)
            flash(f"Success! you are logged in as {attempted_user.username}", category="success")
            return redirect(url_for('market_page'))
        else:
            flash(f"Username and Password does not match! Please try again.", category="danger")
    return render_template('login.html',form = form)

@app.route('/logout')
def logout_page():
    logout_user()
    flash("You have logged out successfully!", category="info")
    return redirect(url_for('home_page'))
    
