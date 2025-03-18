import unittest
from backend.app import app, db, User
import json

class TestApp(unittest.TestCase):

    def setUp(self):
        app.config['TESTING'] = True
        app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:' #Use in memory database
        self.app = app.test_client()
        with app.app_context():
            db.create_all()

    def tearDown(self):
        with app.app_context():
            db.session.remove()
            db.drop_all()

    def test_register_user(self):
        response = self.app.post('/users/register', json={
            'username': 'testuser',
            'password': 'testpassword',
            'email': 'test@example.com'
        })
        data = json.loads(response.data)
        self.assertEqual(response.status_code, 201)
        self.assertEqual(data['message'], 'User registered successfully')

    def test_login_user(self):
        self.app.post('/users/register', json={
            'username': 'testuser',
            'password': 'testpassword',
            'email': 'test@example.com'
        })
        response = self.app.post('/users/login', json={
            'username': 'testuser',
            'password': 'testpassword'
        })
        data = json.loads(response.data)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(data['message'], 'Login successful')

    def test_register_duplicate_username(self):
        self.app.post('/users/register', json={
            'username': 'testuser',
            'password': 'testpassword',
            'email': 'test@example.com'
        })
        response = self.app.post('/users/register', json={
            'username': 'testuser',
            'password': 'testpassword',
            'email': 'test2@example.com'
        })
        data = json.loads(response.data)
        self.assertEqual(response.status_code, 400)
        self.assertEqual(data['message'], 'Username already exists')

    def test_register_duplicate_email(self):
        self.app.post('/users/register', json={
            'username': 'testuser',
            'password': 'testpassword',
            'email': 'test@example.com'
        })
        response = self.app.post('/users/register', json={
            'username': 'testuser2',
            'password': 'testpassword',
            'email': 'test@example.com'
        })
        data = json.loads(response.data)
        self.assertEqual(response.status_code, 400)
        self.assertEqual(data['message'], 'Email already exists')

    def test_login_invalid_password(self):
        self.app.post('/users/register', json={
            'username': 'testuser',
            'password': 'testpassword',
            'email': 'test@example.com'
        })
        response = self.app.post('/users/login', json={
            'username': 'testuser',
            'password': 'wrongpassword'
        })
        data = json.loads(response.data)
        self.assertEqual(response.status_code, 401)
        self.assertEqual(data['message'], 'Invalid username or password')

if __name__ == '__main__':
    unittest.main()
