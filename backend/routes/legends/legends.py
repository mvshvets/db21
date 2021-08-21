from fastapi import APIRouter, UploadFile, File

from db.crud import LegendDB, MunicipalityDB

router = APIRouter(prefix="/legends", tags=["Municipalities"])


@router.get("/get/{item_id}", name="Получить легенду по ID")
async def get_legend(item_id: int):
    """ Получить легенду по ID """
    legend = await LegendDB.get(id=item_id)
    municipality = await MunicipalityDB.search(id=legend.get("municipality_id"))
    legend.append({"municipality": municipality})
    return legend


@router.get("/get-all", name="Получить список городов с легендами")
async def get_legends():
    """ Получить список легенд """
    legends = await LegendDB.search()
    return legends


@router.post("/upload-file", name="Сохранить легенды файлом")
async def set_file(file: UploadFile = File(...)):
    """ Сохранить легенды файлом """
    contents = await file.read()
    print(contents)
    return {"filename": file.filename}


