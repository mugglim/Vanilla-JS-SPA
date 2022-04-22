import { JSON_PLACEHOLDER_BASE_URL as BASE_URL } from '../constatns/url';
import Fetcher from '@/util/Fetcher';

const instance = new Fetcher({ baseURL: BASE_URL });

export const getPostList = async ({ params }) => {
    const data = await instance.get({ url: '/posts', params });
    return data;
};
