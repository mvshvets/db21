from sqlalchemy import *

from .db import metadata

legends_table = Table(
    "legends",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("create_date", BigInteger, nullable=False),
    Column("municipality", String, nullable=False),
    Column("legend", Text),
    Column("story", Text),
    Column("tale", Text),
    Column("bylichki", Text),
    Column("folklore_other", Text),
    Column("lake", Text),
    Column("source", Text),
    Column("stone", Text),
    Column("object_other", Text),
    Column("documents", Text),
    Column("informant", Text),
)
