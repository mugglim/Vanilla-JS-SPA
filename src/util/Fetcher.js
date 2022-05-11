import { stringfyParams } from './urlSearchParam.js';
import { FETCH_ERROR_MESSAGE } from '../constants/errorMessage.js';

export default class Fetcher {
    #baseURL;
    #headers;
    #body;

    constructor({ baseURL, headers }) {
        this.#baseURL = baseURL;
        this.#headers = headers;
    }

    async #handleFetch({ url, method = 'GET', headers, params, data }) {
        const fetchURL = `${this.#baseURL + url}${stringfyParams(params)}`;
        const fetchOptions = {
            method,
            headers: { ...this.#headers, ...headers },
            body: data ? JSON.stringify(data) : null,
        };

        try {
            const response = await fetch(fetchURL, fetchOptions);

            if (response.ok) {
                return await response.json();
            }

            throw new Error(response.status);
        } catch (error) {
            alert(`${error} ${FETCH_ERROR_MESSAGE}`);
        }
    }

    get({ url, headers, params = {} }) {
        return this.#handleFetch({ url, params, headers });
    }

    post({ url, headers, data }) {
        return this.#handleFetch({ url, method: 'POST', headers, data });
    }
}
