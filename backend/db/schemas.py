from sqlalchemy import *

from .db import metadata
from .models import LegendsTypes

legends_table = Table(
    "legends",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("create_date", BigInteger, nullable=False),
    Column("type", Enum(LegendsTypes), nullable=False),
    Column("description", Text, nullable=False),
    Column("documents", Text),
    Column("informant", Text),
    Column("municipality_id", ForeignKey("municipalities.id"), nullable=False)
)

municipalities_table = Table(
    "municipalities",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("create_date", BigInteger, nullable=False),
    Column("municipality", String, nullable=False),
)
