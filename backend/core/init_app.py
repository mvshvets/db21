from db.crud import MunicipalityDB

municipalities = [
    {
        "name": "Батецкий",
        "lat": 58.38,
        "long": 30.18,
    }, {
        "name": "Боровичский",
        "lat": 58.23,
        "long": 33.54,
    }, {
        "name": "Валдайский",
        "lat": 57.58,
        "long": 33.15,
    }, {
        "name": "Волотовский",
        "lat": 57.85,
        "long": 30.69,
    }, {
        "name": "Демянский",
        "lat": 57.39,
        "long": 32.28,
    }, {
        "name": "Крестецкий",
        "lat": 58.27,
        "long": 32.42,
    }, {
        "name": "Любытинский",
        "lat": 58.81,
        "long": 33.39,
    }, {
        "name": "Маловишерский",
        "lat": 58.91,
        "long": 32.08,
    }, {
        "name": "Мошенской",
        "lat": 58.51,
        "long": 34.59,
    }, {
        "name": "Новгородский",
        "lat": 58.31,
        "long": 30.16,
    }, {
        "name": "Парфинский",
        "lat": 57.96,
        "long": 31.85,
    }, {
        "name": "Пестовский",
        "lat": 58.63,
        "long": 35.66,
    }, {
        "name": "Поддорский",
        "lat": 57.47,
        "long": 31.05,
    }, {
        "name": "Солецкий",
        "lat": 58.07,
        "long": 30.19,
    }, {
        "name": "Старорусский",
        "lat": 57.51,
        "long": 31.18,
    }, {
        "name": "Хвойнинский",
        "lat": 58.9,
        "long": 34.52,
    }, {
        "name": "Холмский",
        "lat": 57.13,
        "long": 31.25,
    }, {
        "name": "Чудовский",
        "lat": 59.07,
        "long": 31.39,
    }, {
        "name": "Шимский",
        "lat": 58.25,
        "long": 30.33,
    }]


async def init_db():
    """Инициализация бд при запуске приложения"""
    for item in municipalities:
        if not await MunicipalityDB.get(name=item.get("name")):
            await MunicipalityDB.create(name=item.get("name"), lat=item.get("lat"), long=item.get("long"))


async def init_app():
    """Запуск функций при поднятии приложения"""
    await init_db()
