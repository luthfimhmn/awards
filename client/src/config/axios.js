import axios from "axios"

const ENDPOINT = 'http://localhost:3000'

const instance = axios.create({
    baseURL: ENDPOINT,
})

export default instance