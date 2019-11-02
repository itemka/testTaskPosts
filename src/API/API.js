import axios from 'axios';

const instance = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com/`,
    withCredentials: true,
});

export const PostAPI = {
    getPartOfPost: (pageNumber) => instance.get(`posts?_page=${pageNumber}`).then(response => {
        return response.data
    }),
};