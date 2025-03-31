import unittest
import unittest
from ..app import app, db, User
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import json

class SimpleTest(unittest.TestCase):
    def test_pass(self):
        self.assertTrue(True)

if __name__ == '__main__':
    unittest.main()
