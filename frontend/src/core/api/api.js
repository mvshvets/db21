import { axiosInstance } from './api.utils'
import { instance } from './api.consts'

export const LegendsService = {
    /** Получить список легенд */
    getLegends: () => axiosInstance(instance.get('/legends/get-all')),

    /** Получить легенду по ID */
    getLegend: ({ id }) => axiosInstance(instance.get(`/legends/get/${id}`)),

    /** Сохранить легенду */
    setLegend: (data) => axiosInstance(instance.post('/legends/save', data)),
}

export const MunicipalitiesService = {
    /** Получить список муниципалитетов */
    getMunicipalities: () => axiosInstance(instance.get('/municipalities/get-all'))
}

export const FilesService = {
    /** Загрузка файла */
    uploadFile: (data) => {
        const formData = new FormData()
        formData.append('file', data.file)

        return axiosInstance(instance.post('/files/upload', formData))
    },

    /** Загрузка файла для аудиогида */
    uploadAudioFile: (data) => {
        const formData = new FormData()
        formData.append('file', data.file)

        return axiosInstance(instance.post('/files/upload-audio/', formData))
    },

    /** Получить файла для аудиогида */
    getAudioGuide: (data) => axiosInstance(instance.get(`/files/get/${data.id}`))
}