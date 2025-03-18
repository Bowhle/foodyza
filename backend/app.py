from flask import Flask
from flask_cors import CORS
from flask_login import LoginManager
from backend.config import Config
from .models import db
from .routes import user, data

app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)
CORS(app)

login_manager = LoginManager()
login_manager.init_app(app)

@login_manager.user_loader
def load_user(user_id):
    from .models import User
    return User.query.get(int(user_id))

app.register_blueprint(user.bp)
app.register_blueprint(data.bp)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(host='0.0.0.0', port=8080, debug=True)
