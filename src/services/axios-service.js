import axios from 'axios';

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const URL = 'https://superheroapi.com/api/3566277356723893/';
const instance = axios.create({
    baseURL: PROXY_URL + URL,
    timeout: 10000
});

export default instance;