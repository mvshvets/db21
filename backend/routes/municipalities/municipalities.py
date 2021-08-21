from fastapi import APIRouter

from db.crud import MunicipalityDB
from routes.municipalities.models import MunicipalityResponseModel

router = APIRouter(prefix="/municipalities", tags=["Municipalities"])


@router.get("/get-all", response_model=list[MunicipalityResponseModel], name="Получить муниципалитеты")
async def get_municipalities():
    """ Получить муниципалитеты """
    response = await MunicipalityDB.search()
    return response
