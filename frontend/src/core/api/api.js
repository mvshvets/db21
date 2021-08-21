import { axiosInstance } from './api.utils'
import { instance } from './api.consts'

export const LegendsService = {
    /** Получить список легенд */
    getLegends: () => axiosInstance(instance.get('/legends/get-all')),

    /** Получить легенду по ID */
    getLegend: ({ id }) => axiosInstance(instance.get(`/legends/get/${id}`)),

    /** Сохранить легенду */
    setLegend: (data) => axiosInstance(instance.post('/legends/save', data)),

    /** Загрузка файла */
    uploadFile: (data) => {
        const formData = new FormData()
        formData.append('file', data.file)

        return axiosInstance(instance.post('/legends/upload-file', formData))
    },

    /** Загрузка файла для аудиогида */
    uploadAudioFile: (data) => {
        const formData = new FormData()
        formData.append('file', data.file)

        return axiosInstance(instance.post('/legends/upload-audio-file', formData))
    },
}

export const MunicipalitiesService = {
    /** Получить список муниципалитетов */
    getMunicipalities: () => axiosInstance(instance.get('/municipalities/get-all'))
}
