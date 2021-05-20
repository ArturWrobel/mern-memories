import axios from 'axios';

const url = 'https://apkamemory.herokuapp.com/posts'; //the only change for heroku (URL changed from localhost)



export const fetchPosts = () => axios.get(url);
export const fetchPostsBySearch = (searchQuery) => axios.get(
    `/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const signIn = (formData) => axios.post('/user/signin', formData);
export const signUp = (formData) => axios.post('/user/signup', formData);