import { axiosInstance } from './api.utils'
import { instance } from './api.consts'

export const LegendsService = {
    /** Регистрация */
    getLegends: (data) => axiosInstance(instance.post('/get', data)),

    /** Загрузка файла */
    uploadFile: (data) => {
        const formData = new FormData()
        formData.append('file', data.file)

        return axiosInstance(instance.post('/legends/upload-file', formData))
    },
}
