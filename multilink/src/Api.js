import axios from 'axios';

const API = axios.create({
    baseURL: 'https://localhost/api',
    headers: {
        "Content-type": "application/json"
    }
})

export default API;