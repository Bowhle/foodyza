from flask import Blueprint, jsonify, request
from flask_login import login_user, logout_user, login_required, current_user
from ..models import User, db

bp = Blueprint('user', __name__, url_prefix='/api/user')

@bp.route('/register', methods=['POST'])
def register():
    # ... (Registration logic) ...
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'message': 'Username and password are required'}), 400

    if User.query.filter_by(username=username).first():
        return jsonify({'message': 'Username already exists'}), 400

    user = User(username=username)
    user.set_password(password)
    db.session.add(user)
    db.session.commit()

    return jsonify({'message': 'User registered successfully'}), 201

@bp.route('/login', methods=['POST'])
def login():
    # ... (Login logic) ...
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()
    if user and user.check_password(password):
        login_user(user)
        return jsonify({'message': 'Login successful'}), 200
    else:
        return jsonify({'message': 'Invalid username or password'}), 401

@bp.route('/logout', methods=['POST'])
@login_required
def logout():
    logout_user()
    return jsonify({'message': 'Logout successful'}), 200

@bp.route('/current', methods=['GET'])
@login_required
def current():
    return jsonify({'username': current_user.username}), 200
