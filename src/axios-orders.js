import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://dashboard-6be53.firebaseio.com/'
});

export default instance;