from typing import Optional

from pydantic import BaseModel


class LegendDataModel(BaseModel):
    id: int
    create_date: int
    municipality: str
    legend: Optional[str]
    story: Optional[str]
    tale: Optional[str]
    bylichki: Optional[str]
    folklore_other: Optional[str]
    lake: Optional[str]
    source: Optional[str]
    stone: Optional[str]
    object_other: Optional[str]
    documents: Optional[str]
    informant: Optional[str]

    class Config:
        orm_mode = True
