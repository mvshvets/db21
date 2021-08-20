from databases import Database
from sqlalchemy import create_engine, MetaData

from core.settings import get_settings

settings = get_settings()
engine = create_engine(settings.POSTGRES_DATABASE_URI)
metadata = MetaData()
database = Database(settings.POSTGRES_DATABASE_URI)
