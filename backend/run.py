#!usr/bin/env python
import uvicorn
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from core.aiohttp import get_session
from core.init_app import init_app
from db.db import engine, metadata, database
from routes import legends, municipalities

metadata.create_all(engine)

app = FastAPI(title="Струны Новгородчины API")


@app.on_event("startup")
async def startup():
    await database.connect()
    await init_app()


@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()
    session = await get_session()
    if session:
        await session.close()


origins = [
    "http://localhost:3001",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(legends)
app.include_router(municipalities)

if __name__ == "__main__":
    uvicorn.run("run:app", host="0.0.0.0", port=8000, reload=True)
