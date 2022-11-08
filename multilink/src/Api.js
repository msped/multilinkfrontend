import axios from 'axios';

const API = axios.create({
    baseURL: 'https://localhost/api',
    headers: {
        Authorization: localStorage.getItem('access_token')
            ? 'JWT ' + localStorage.getItem('access_token')
            : null,
        'Content-Type': 'application/json',
        accept: 'application/json',
    }
})

export default API;