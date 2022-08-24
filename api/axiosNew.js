import axios from 'axios'
// import { BASE_URL } from './constants'
const BASE_URL = "http://localhost:8001";

const axiosNew = axios.create({
    baseURL: BASE_URL,
})

axiosNew.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('JWT');
        console.log("token",token)
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
            config.headers["Content-Type"] = "application/json"
        } else {
            // Do something... Usually logout user.
        }
        return config
    }
)

export default axiosNew