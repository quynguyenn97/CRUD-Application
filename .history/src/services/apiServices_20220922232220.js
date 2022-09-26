import axios from "./customizeAxios";
const fetchAllUser = (page) => {
    return axios.get(`/api/users?page=${page}`);
};
const postCreateUser = () => {
    return axios.post("/api/users");
};
export { fetchAllUser };
