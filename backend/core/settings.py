from functools import lru_cache
from typing import Optional, Dict, Any

from pydantic import BaseSettings, validator, PostgresDsn


class Settings(BaseSettings):
    POSTGRES_LOGIN: str
    POSTGRES_PASSWORD: str
    POSTGRES_HOST: str
    POSTGRES_PORT: str
    POSTGRES_DB: str
    POSTGRES_DATABASE_URI: Optional[PostgresDsn] = None

    @validator("POSTGRES_DATABASE_URI", pre=True)
    def assemble_db_connection(cls, v: Optional[str], values: Dict[str, Any]) -> Any:
        if isinstance(v, str):
            return v
        return PostgresDsn.build(
            scheme="postgresql",
            user=values.get("POSTGRES_LOGIN"),
            password=values.get("POSTGRES_PASSWORD"),
            host=f"{values.get('POSTGRES_HOST')}:{values.get('POSTGRES_PORT')}",
            path=f"/{values.get('POSTGRES_DB') or ''}",
        )

    MINIO_HOST: str
    MINIO_PORT: int
    MINIO_DATABASE_URI: Optional[str] = None

    @validator("MINIO_DATABASE_URI", pre=True)
    def assemble_s3_connection(cls, v: Optional[str], values: Dict[str, Any]) -> Any:
        if isinstance(v, str):
            return v
        return f"{values.get('MINIO_HOST')}:{values.get('MINIO_PORT')}"

    class Config:
        env_file = ".env"
        case_sensitive = True


@lru_cache()
def get_settings():
    return Settings()
