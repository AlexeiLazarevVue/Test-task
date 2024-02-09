import axios from 'axios'
import config from '@/app/config.ts'

export const baseApi = base_domain => {
    return axios.create({
        baseURL: config.baseURL,
        headers: {
            Authorization: `${localStorage.getItem('baseDomain')} ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
        },
    })
}
export const authApi = base_domain => {
    return axios.create({
        baseURL: config.authURL,
        headers: {
            Authorization: `${localStorage.getItem('baseDomain')} ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
        },
    })
}
