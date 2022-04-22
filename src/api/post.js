import { JSON_PLACEHOLDER_BASE_URL as BASE_URL } from '../constatns/url';
import Fetcher from '@/util/Fetcher';

const instance = new Fetcher({ baseURL: BASE_URL });

export const getPost = async ({ postId }) => {
    try {
        const data = await instance.get({ url: `/posts/${postId}` });
        return data;
    } catch (err) {
        alert('Post 목록 조회 실패');
    }
};

export const getPostList = async ({ params }) => {
    try {
        const data = await instance.get({ url: '/posts', params });
        return data;
    } catch (err) {
        alert('PostDetail 조회 실패');
    }
};
