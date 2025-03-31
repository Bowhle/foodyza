from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
import datetime
from functools import wraps

app = Flask(__name__)

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqldb://foodyza_user:your_database_password@your_cloud_sql_private_ip:3306/your_database_name'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'your_secret_key'  # Change this to a strong, random key

db = SQLAlchemy(app)

#
# Define your models here
#
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

#
# Authentication Decorator
#
def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')

        if not token:
            return jsonify({'message': 'Token is missing!'}), 401

        try:
            #  Normally you would decode and validate a JWT here
            #  For simplicity, we'll just check if a token is present
            #  In a real app, use a library like PyJWT
            if token != "valid_token":  # Replace "valid_token" with actual validation
                return jsonify({'message': 'Token is invalid!'}), 401

        except Exception as e:
            return jsonify({'message': 'An error occurred while validating the token!'}), 500

        return f(*args, **kwargs)

    return decorated

#
# Routes
#
@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()

    hashed_password = generate_password_hash(data['password'], method='sha256')

    new_user = User(username=data['username'], email=data['email'], password=hashed_password)

    try:
        db.session.add(new_user)
        db.session.commit()
    except Exception as e:
        return jsonify({'message': 'Could not register user!', 'error': str(e)}), 500

    return jsonify({'message': 'User registered successfully!'}), 201

@app.route('/login', methods=['POST'])
def login():
    auth = request.authorization

    if not auth or not auth.username or not auth.password:
        return jsonify({'message': 'Could not verify!'}), 401

    user = User.query.filter_by(username=auth.username).first()

    if not user:
        return jsonify({'message': 'Could not verify!'}), 401

    if check_password_hash(user.password, auth.password):
        #  Normally you would generate a JWT here and return it
        #  For simplicity, we'll just return a success message
        return jsonify({'message': 'Login successful!'}), 200

    return jsonify({'message': 'Could not verify!'}), 401

@app.route('/protected', methods=['GET'])
@token_required
def protected():
    return jsonify({'message': 'This is a protected route!'}), 200

if __name__ == '__main__':
    app.run(debug=True)
