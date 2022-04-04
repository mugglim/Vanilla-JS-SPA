export async function fetchHelper({
    baseURL,
    url,
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

        const response = await fetch(baseURL + url, options);
        const data = await response.json();

        return data;
    } catch (e) {
        throw new Error('Fetch is failed');
    }
}
