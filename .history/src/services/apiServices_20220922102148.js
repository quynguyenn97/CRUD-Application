import axios from "./customizeAxios";
const fetchAllUser = (data) => {
    return axios.get("/api/users?page=1");
};
export { fetchAllUser };
