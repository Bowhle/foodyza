from flask import Flask, request, jsonify, send_from_directory
from backend.models import User, db
import os
import re
import jwt
from datetime import datetime, timedelta
from functools import wraps
import logging
from dotenv import load_dotenv
from flask_swagger_ui import get_swaggerui_blueprint

load_dotenv()

app = Flask(__name__)
app.config.from_object(os.environ.get('APP_SETTINGS') or 'backend.config.Config')
db.init_app(app)

# Configure logging
logging.basicConfig(level=logging.ERROR)

SECRET_KEY = os.environ.get('JWT_SECRET_KEY')
if not SECRET_KEY:
    raise ValueError("JWT_SECRET_KEY not set")

# Swagger UI Blueprint
SWAGGER_URL = '/swagger'
API_URL = '/static/swagger.yml'
swaggerui_blueprint = get_swaggerui_blueprint(
    SWAGGER_URL,
    API_URL,
    config={
        'app_name': "Foodyza API"
    }
)
app.register_blueprint(swaggerui_blueprint, url_prefix=SWAGGER_URL)

@app.route('/static/<path:path>')
def send_static(path):
    return send_from_directory('static', path)

# ... (rest of your routes) ...

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)
