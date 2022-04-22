import { isEmptyObject } from './object.js';

const FETCH_ERROR_MSG = '오류가 발생했습니다. 메인 페이지로 돌아가주세요';

export default class Fetcher {
    #baseURL;
    #headers;
    #body;

    constructor({ baseURL, headers }) {
        this.#baseURL = baseURL;
        this.#headers = headers;
    }

    #addParams(url, params) {
        return `${url}?${new URLSearchParams(params)}`;
    }

    async #handleFetch({ url, method = 'GET', headers, params = {}, data }) {
        const options = {
            method: 'GET',
            headers: { ...this.#headers, ...headers },
            body: data ? JSON.stringify(data) : null,
        };

        if (!isEmptyObject(params)) {
            url = this.#addParams(url, params);
        }

        try {
            const response = await fetch(this.#baseURL + url, options);

            if (response.ok) {
                return await response.json();
            }

            throw new Error(response.status);
        } catch (error) {
            alert(`${error} ${FETCH_ERROR_MSG}`);
        }
    }

    async get({ url, headers, params }) {
        return await this.#handleFetch({ url, params, headers });
    }

    async post({ url, headers, data }) {
        return await this.#handleFetch({ url, method: 'POST', headers, data });
    }
}
