from enum import Enum
from typing import Optional

from pydantic import BaseModel


class LegendsTypes(str, Enum):
    LEGEND = "LEGEND"
    STORY = "STORY"
    TALE = "TALE"
    BYLICHKI = "BYLICHKI"
    FOLKLORE_OTHER = "FOLKLORE_OTHER"
    LAKE = "LAKE"
    SOURCE = "SOURCE"
    STONE = "STONE"
    OBJECT_OTHER = "OBJECT_OTHER"


class LegendDataModel(BaseModel):
    id: int
    create_date: int
    name: str
    type: LegendsTypes
    description: str
    documents: Optional[str]
    informant: Optional[str]
    municipality_id: int
    audio_guide_id: Optional[int]

    class Config:
        orm_mode = True


class MunicipalityDataModel(BaseModel):
    id: int
    create_date: int
    name: str

    class Config:
        orm_mode = True
