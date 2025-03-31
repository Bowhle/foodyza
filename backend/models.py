from flask_sqlalchemy import SQLAlchemy
# ... other imports ...
import datetime # Make sure you have this import

db = SQLAlchemy()

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)

    def set_password(self, password):
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def __repr__(self):
        return f'<User {self.username}>'

class Restaurant(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(200), nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    menus = db.relationship('Menu', backref='restaurant', lazy=True)
    cuisines = db.relationship('Cuisine', secondary='restaurant_cuisine', backref='restaurants', lazy='subquery')  # Added relationship

    def __repr__(self):
        return f'<Restaurant {self.name}>'

class Cuisine(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)

    def __repr__(self):
        return f'<Cuisine {self.name}>'

# Association table for the many-to-many relationship
restaurant_cuisine = db.Table('restaurant_cuisine',
    db.Column('restaurant_id', db.Integer, db.ForeignKey('restaurant.id'), primary_key=True),
    db.Column('cuisine_id', db.Integer, db.ForeignKey('cuisine.id'), primary_key=True)
)

class Menu(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    restaurant_id = db.Column(db.Integer, db.ForeignKey('restaurant.id'), nullable=False)
    items = db.relationship('MenuItem', backref='menu', lazy=True)

class MenuItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    price = db.Column(db.Float, nullable=False)
    menu_id = db.Column(db.Integer, db.ForeignKey('menu.id'), nullable=False)

    def __repr__(self):
        return f'<MenuItem {self.name}>'

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    menu_item_id = db.Column(db.Integer, db.ForeignKey('menu_item.id'), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    order_date = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    status = db.Column(db.String(20), nullable=False, default='Pending')

    user = db.relationship('User', backref='orders', lazy=True)
    menu_item = db.relationship('MenuItem', backref='orders', lazy=True)

    def __repr__(self):
        return f'<Order {self.id}>'
