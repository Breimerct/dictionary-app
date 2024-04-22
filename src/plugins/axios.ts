import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en/',
});

export { httpClient, axios };
