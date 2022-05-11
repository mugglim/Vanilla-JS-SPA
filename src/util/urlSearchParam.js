import { isEmptyObject } from './object';

export const stringfyParams = params => {
    return isEmptyObject(params)
        ? ''
        : '?' + new URLSearchParams(params).toString();
};
