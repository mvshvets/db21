import { notification } from 'antd'

/**
 * Обертка для работы с Promise
 * @param axiosInstanceResponse результат запроса axios
 */
export function axiosInstance(
    axiosInstanceResponse
) {
    return new Promise((resolve,
        reject) => axiosInstanceResponse.then((res) => {
        resolve(res.data)
    }).catch((err) => {
        serverErrorTrap(err?.response?.status, err?.response?.data)
        reject(err)
    }))
}

/**
 * Обработчик ошибок с сервера
 * @param data данные с сервера
 * @param status статус код
 */
const serverErrorTrap = (status, data) => {
    switch (status) {
        case 401:
        case 403:
            break
        case 404:
            notification.error({
                message: 'Something went wrong'
            })
            break
        case 422:
            notification.error({
                message: 'Required fields are not specified: ' + data?.detail[0].loc.join(', ')
            })
            break
        default:
            notification.error({
                message: data?.detail
            })
    }
}
