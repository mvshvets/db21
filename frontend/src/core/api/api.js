import { axiosInstance } from './api.utils'
import { instance } from './api.consts'

export const LegendsService = {
    /** Получить список легенд */
    getLegends: () => axiosInstance(instance.get('/legends/get-all')),

    /** Получить легенду по ID */
    getLegend: ({ id }) => axiosInstance(instance.get(`/legends/get/${id}`)),

    /** Загрузка файла */
    uploadFile: (data) => {
        const formData = new FormData()
        formData.append('file', data.file)

        return axiosInstance(instance.post('/legends/upload-file', formData))
    },
}
