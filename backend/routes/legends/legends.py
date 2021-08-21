from fastapi import APIRouter, UploadFile, File

from db.crud import LegendDB, MunicipalityDB
from routes.legends.models import LegendResponseModel, LegendSaveRequestModel

router = APIRouter(prefix="/legends", tags=["Legends"])


@router.get("/get/{item_id}", response_model=LegendResponseModel, name="Получить легенду по ID")
async def get_legend(item_id: int):
    """ Получить легенду по ID """
    response = await LegendDB.get(id=item_id)
    return response


@router.post("/save", name="Сохранить легенду")
async def set_legend(body: LegendSaveRequestModel):
    """ Сохранить легенду """
    response = await LegendDB.create(**body.dict())
    return response


@router.get("/get-all", response_model=list[LegendResponseModel], name="Получить список городов с легендами")
async def get_legends():
    """ Получить список легенд """
    legends = await LegendDB.search()
    municipalities = await MunicipalityDB.search()
    response = list()
    for legend in legends:
        for municipality in municipalities:
            if legend.get("municipality_id") == municipality.get("id"):
                tmp = legend.copy()
                tmp["municipality"] = municipality.get("name")
                response.append(tmp)
    return response


@router.post("/upload-file", name="Сохранить легенды файлом")
async def set_file(file: UploadFile = File(...)):
    """ Сохранить легенды файлом """
    contents = await file.read()

    return {"filename": file.filename}


@router.post("/upload-audio-file", name="Загрузка файла для аудиогида")
async def set_file(file: UploadFile = File(...)):
    """ Загрузка файла для аудиогида """
    contents = file.file

    return {"filename": file.filename}


