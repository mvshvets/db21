from typing import Optional

from pydantic import BaseModel

from db.models import LegendsTypes, LegendDataModel


class LegendResponseModel(LegendDataModel):
    pass


class LegendSaveRequestModel(BaseModel):
    name: str
    type: LegendsTypes
    description: str
    documents: Optional[str]
    informant: Optional[str]
    municipality_id: int
    audio_guide_id: Optional[int]
