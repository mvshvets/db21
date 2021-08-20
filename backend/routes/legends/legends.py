from fastapi import APIRouter, UploadFile, File

router = APIRouter(prefix="/legends", tags=["Legends"])


@router.get("/get", name="Получить список легенд")
async def get_legends(body):
    """ Получить список легенд """
    legends = list()
    return legends


@router.post("/upload-file", name="Сохранить легенды файлом")
async def set_file(file: UploadFile = File(...)):
    """ Сохранить легенды файлом """
    contents = await file.read()
    print(contents)
    return {"filename": file.filename}


