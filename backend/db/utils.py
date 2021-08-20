from core.utils import get_current_timestamp


def create_date(func):
    """Декоратор для поля "дата создания" при создании сущности в БД"""
    async def decorator(cls, **kwarg):
        now = await get_current_timestamp()
        await func(cls, create_date=now, **kwarg)
    return decorator

