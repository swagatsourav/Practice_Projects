from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, ValidationError
from wtforms.validators import EqualTo, Length, Email, DataRequired
from market.models import User

class RegisterForm(FlaskForm):

    def validate_username(self, user_to_validate):
        user = User.query.filter_by(username = user_to_validate.data).first()
        if user:
            raise ValidationError('Username already taken! Please try a different username.')

    def validate_email_address(self, email_to_check):
        email = User.query.filter_by(email_address= email_to_check.data).first()
        if email:
            raise ValidationError("Email already taken ! Please try a different one.")
        
    username = StringField(label='Username', validators=[Length(min=2,max=30), DataRequired()])
    email_address = StringField(label='Email Address', validators=[Email(),DataRequired()])
    password1 = PasswordField(label='Password', validators=[Length(min=6),DataRequired()])
    password2 = PasswordField(label='Confirm Password',validators=[EqualTo('password1'),DataRequired()])
    submit = SubmitField(label = 'Create Account')

