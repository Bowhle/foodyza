import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'your_secret_key'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'mysql://foodyza_user:foodyza1234!@34.35.49.178/foodyza_db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
