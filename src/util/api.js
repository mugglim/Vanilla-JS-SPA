const isEmptyObject = obj => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
};

export async function fetchHelper({
    baseURL,
    url,
    params = {},
    method = 'GET',
    headers,
    body,
}) {
    try {
        const options = {
            method,
            headers: { ...headers },
            body,
        };

        if (!isEmptyObject(params)) {
            url = `${url}?${new URLSearchParams(params)}`;
        }

        const response = await fetch(baseURL + url, options);
        const data = await response.json();

        return data;
    } catch (e) {
        throw new Error('Fetch is failed');
    }
}
