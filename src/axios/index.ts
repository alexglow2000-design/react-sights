
import axios from 'axios'

const $host = axios.create({
    baseURL: import.meta.env.REACT_APP_API_URL || 'https://rostov-on-map-api.onrender.com/'
})

export const getAll = async (location?: string, limit?: number, page?: number) => {
    try {
        let res;
        if (location && limit && page) {
            res = await $host.get('/api/sight', {
                params: {
                    location, page, limit
                }
            })
        } else {
            res = await $host.get('/api/sight')
        }
        return res.data
    } catch (e) {
        console.error('Ошибка при получении данных:', e)
        throw e
    }
}

export const getOne = async (id: number | string) => {
    try {
        const res = await $host.get('/api/sight/' + id)
        return res.data
    } catch (e) {
        console.error('Ошибка при получении данных:', e)
        throw e
    }
}