import axios from 'axios'

export const BASE_URL_HTTP = `http:/${process.env.REACT_APP_API_URL}`

export const instance = axios.create({
    baseURL: BASE_URL_HTTP
})