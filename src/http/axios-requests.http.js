import axios from 'axios';

export const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

export const axiosPost = async (url, postBody) => {
    try {
        const { data } = await axios.post(url, postBody);
        return data;
    } catch (error) {
        return error;
    }
};
