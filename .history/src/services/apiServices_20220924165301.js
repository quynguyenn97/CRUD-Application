import axios from "./customizeAxios";
const fetchAllUser = (page) => {
    return axios.get(`/api/users?page=${page}`);
};
const postCreateUser = (name, job) => {
    return axios.post("/api/users", { name, job });
};

const putEditUser = (name, job) => {
    return axios.put("/api/users/2", { name, job });
};
const deleteUser = (nid) => {
    return axios.delete(`/api/users/${id}`);
};
export { fetchAllUser, postCreateUser, putEditUser, deleteUser };
