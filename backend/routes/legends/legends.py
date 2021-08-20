from fastapi import APIRouter

router = APIRouter(prefix="/legends", tags=["Legends"])


@router.post("/get", name="Получить список легенд")
async def get_legends(body):
    """ Получить список легенд """
    legends = list()
    return legends
