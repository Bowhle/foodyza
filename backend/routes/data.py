from flask import Blueprint, jsonify

bp = Blueprint('data', __name__, url_prefix='/api/data')

@bp.route('/', methods=['GET'])
def get_data():
    data = {'message': 'This is example data from Flask API'}
    return jsonify(data)

