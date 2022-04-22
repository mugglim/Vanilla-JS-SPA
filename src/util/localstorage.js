export const setLocalStorageItem = (key, value) => {
    if (!key || !value) return;
    localStorage.setItem(key, JSON.stringify(value));
};

export const removeLocalStorageImte = key => {
    if (!key) return;
    localStorage.removeItem(key);
};

export const getLocalStorageItem = key => {
    if (!key) return;
    const localStorageItem = localStorage.getItem(key);
    return localStorageItem ? JSON.parse(localStorageItem) : '';
};
