# initial Project with template
# passing data to template
# formating date in table form and display to user
# template inheritance

# adding sqllite database
 # --> Installed "pip install flask-sqlalchemy"
 # --> To create database , you need import "db" from market.py to your shell and there run 

>>> from market import db
>>> db.create_all()
>>> from market import Item
>>> item1 = Item(name="Iphone 10",price=500, barcode='23728732837823898',description = 'desc')
>>> db.session.add(item1) 
>>> db.session.commit()
>>> Item.query.all()
>>> for i in Item.query.all(): 
>>>    print(i.name)
>>> Item.query.filter_by(name="Iphone 10")   # Returns an iterable object
>>> Item.query.filter_by(name="Iphone 10")[0]
>>> for i in Item.query.filter_by(name="Iphone 10"): print(i.name)

######### Flaskmarket3 ##########

# Restructuring code

######## Flaskmarket4 ###########

# Adding User table and Relationship

>>> db.drop_all()
>>> db.create_all()
>>> from market.models import User,Item
>>> u1 = User(username='Swagat',password_hash='123456',email_address='swagat.miku@gmail.com')
>>> db.session.add(u1)
>>> db.session.commit()
>>> User.query.all()
>>> item1 = Item(name="Iphone 10",price=500, barcode='23728732837823898',description = 'desc') 
>>> db.session.add(item1) 
>>> db.session.commit()
>>> item1 = Item(name="Laptop",price=1000, barcode='237287328378255',description = 'desc2') 
>>> db.session.add(item1) 
>>> db.session.commit()  
>>> item1 = Item.query.filter_by(name='Laptop').first()
>>> item1.owner
>>> item1.owner = User.query.filter_by(username='Swagat').first()
>>> db.session.add(item1)
>>> db.session.commit()
>>> db.session.rollback()
>>> item1.owner = User.query.filter_by(username='Swagat').first().id
>>> db.session.add(item1)
>>> db.session.commit()
>>> item1.owner
>>> item1.owned_user
>>> item1.owned_user.username
>>> item1.owned_user.password_hash
>>> item1.owned_user.items