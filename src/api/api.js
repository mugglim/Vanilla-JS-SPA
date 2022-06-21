import { JSON_PLACEHOLDER_BASE_URL as BASE_URL } from '@/constants/url';
import Fetcher from '@/util/Fetcher';

const instance = new Fetcher({ baseURL: BASE_URL });

export const getFoo = async () => {
    try {
        const data = await instance.get({ url: `/foo` });
        return data;
    } catch (err) {
        alert('Post 목록 조회 실패');
    }
};
