export const isEmptyObject = obj => {
    if (!obj) return false;

    return Object.keys(obj).length === 0 && obj.constructor === Object;
};
