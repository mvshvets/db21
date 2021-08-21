from .db import database
from .models import *
from .schemas import *
from .utils import *


class LegendDB:
    @classmethod
    @create_date
    async def create(cls, **kwargs) -> int:
        query = legends_table.insert().values(**kwargs)
        item_id = await database.execute(query)
        return item_id

    @classmethod
    async def get(cls, **kwargs) -> LegendDataModel or None:
        query = legends_table.select().where(and_(legends_table.c[key] == value for key, value in list(
            kwargs.items())))
        item = await database.fetch_one(query)
        if item:
            return LegendDataModel(**item).dict()

    @classmethod
    async def search(cls, **kwargs) -> list[LegendDataModel] or None:
        query = legends_table.select().where(
            and_(legends_table.c[key] == value for key, value in list(kwargs.items()) if value is not None))
        items = await database.fetch_all(query)
        if len(items):
            return [LegendDataModel(**item).dict() for item in items]

    @classmethod
    async def update(cls, **kwargs) -> int:
        query = legends_table.update().where(legends_table.c.id == kwargs["id"]).values(kwargs).returning(legends_table)
        user_id = await database.execute(query)
        return user_id

    @classmethod
    async def delete(cls, item_id) -> LegendDataModel or None:
        query = legends_table.delete().where(legends_table.c.id == item_id).returning(legends_table)
        item = await database.execute(query)
        return LegendDataModel(**item).dict() if item else None


class MunicipalityDB:
    @classmethod
    @create_date
    async def create(cls, **kwargs) -> int:
        query = municipalities_table.insert().values(**kwargs)
        item_id = await database.execute(query)
        return item_id

    @classmethod
    async def get(cls, **kwargs) -> MunicipalityDataModel or None:
        query = municipalities_table.select().where(and_(municipalities_table.c[key] == value for key, value in list(
            kwargs.items())))
        item = await database.fetch_one(query)
        if item:
            return MunicipalityDataModel(**item).dict()

    @classmethod
    async def search(cls, **kwargs) -> list[MunicipalityDataModel] or None:
        query = municipalities_table.select().where(
            and_(legends_table.c[key] == value for key, value in list(kwargs.items()) if value is not None))
        items = await database.fetch_all(query)
        if len(items):
            return [MunicipalityDataModel(**item).dict() for item in items]

    @classmethod
    async def update(cls, **kwargs) -> int:
        query = municipalities_table.update().where(municipalities_table.c.id == kwargs["id"]).values(kwargs).returning(legends_table)
        user_id = await database.execute(query)
        return user_id

    @classmethod
    async def delete(cls, item_id) -> MunicipalityDataModel or None:
        query = municipalities_table.delete().where(municipalities_table.c.id == item_id).returning(municipalities_table)
        item = await database.execute(query)
        return MunicipalityDataModel(**item).dict() if item else None
