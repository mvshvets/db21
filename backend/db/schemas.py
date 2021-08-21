from sqlalchemy import *

from .db import metadata
from .models import LegendsTypes

legends_table = Table(
    "legends",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("create_date", BigInteger),
    Column("name", String),
    Column("type", Enum(LegendsTypes)),
    Column("description", Text),
    Column("documents", Text),
    Column("informant", Text),
    Column("audio_guide_id", Integer),
    Column("lat", FLOAT),
    Column("long", FLOAT),
    Column("municipality_id", ForeignKey("municipalities.id"))
)

municipalities_table = Table(
    "municipalities",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("create_date", BigInteger),
    Column("name", String),
    Column("lat", FLOAT),
    Column("long", FLOAT),
)
