import axios from "axios";
import instance from "./customizeAxios";
const fetchAllUser = (data) => {
    return axios.get("/api/users?page=1");
};
export { fetchAllUser };
