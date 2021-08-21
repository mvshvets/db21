from db.crud import MunicipalityDB

municipalities = ["Батецкий", "Боровичский", "Валдайский", "Волотовский", "Демянский", "Крестецкий", "Любытинский",
                     "Маловишерский", "Мошенской", "Новгородский", "Парфинский", "Пестовский", "Пестовский",
                     "Поддорский", "Солецкий", "Старорусский", "Хвойнинский", "Холмский", "Чудовский", "Шимский"]


async def init_db():
    """Инициализация бд при запуске приложения"""
    for item in municipalities:
        if not await MunicipalityDB.get(name=item):
            await MunicipalityDB.create(name=item)


async def init_app():
    """Запуск функций при поднятии приложения"""
    await init_db()
