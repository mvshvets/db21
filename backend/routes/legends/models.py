from typing import Optional

from pydantic import BaseModel

from db.models import LegendsTypes, LegendDataModel


class LegendResponseModel(LegendDataModel):
    municipality: str


class LegendSaveRequestModel(BaseModel):
    name: str
    type: LegendsTypes
    description: str
    documents: Optional[str]
    informant: Optional[str]
    municipality_id: int
    audio_guide_id: Optional[int]
    lat: float
    long: float


types_list = [
    LegendsTypes.LEGEND,
    LegendsTypes.STORY,
    LegendsTypes.TALE,
    LegendsTypes.BYLICHKI,
    LegendsTypes.FOLKLORE_OTHER,
    LegendsTypes.LAKE,
    LegendsTypes.SOURCE,
    LegendsTypes.STONE,
    LegendsTypes.OBJECT_OTHER,
]
