#### Хакатон "Цифровой прорыв 2021". Кейс Великого Новгорода

Приложение поднимается с помощью `docker-compose`.

Требуется установить 
- для linux/ubuntu: `docker` и `docker-compose`
- для windows: `docker-desktop`

Для запуска проекта в консоле в директории проекта ввести команду `docker-compose up --build`

Сайт `http://localhost`

Документация сервера `http://localhost/api/docs`

Основные фичи:
- сохранение, изменение, удаление легенд и других фольклерных объектов
- проверка вывода маркеров легенд на карте
- сохранение новых легенд в бд либо через ручное заполнение формы, либо загрузкой файла (для примера файл, предложенный кейсодержателем)
- сохранение и изменение файла с аудиогидом у легенды

Подробный стек: 
- React 
- antd 
- nginx 
- Leaflet 
- axios 
- SASS 
- FastAPI 
- postgresql 
- sqlAlchemy 
- docker-compose
- AmazonWebService
- Minio