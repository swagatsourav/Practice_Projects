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

