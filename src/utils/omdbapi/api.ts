import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';

const cache = setupCache({
    maxAge: 1000 * 60 * 60,
});

export const omdbAPI = axios.create({
    baseURL: process.env.OMDB_API_URL,
    method: 'get',
    adapter: cache.adapter,
});