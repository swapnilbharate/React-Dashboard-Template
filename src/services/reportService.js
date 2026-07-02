import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getUsers = async () => {
  const res = await axios.get(`${BASE_URL}/users`);
  return res.data;
};

export const getTodos = async () => {
  const res = await axios.get(`${BASE_URL}/todos`);
  return res.data.slice(0, 20);
};

export const getPosts = async () => {
  const res = await axios.get(`${BASE_URL}/posts`);
  return res.data.slice(0, 10);
};
