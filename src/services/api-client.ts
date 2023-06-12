import axios, { CanceledError } from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'cd4f77792bc0483e815146c5599d357a',
    },
});

export { CanceledError };
