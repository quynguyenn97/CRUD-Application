import axios from "axios";
const fetchAllUser = (data) => {
    return axios.get("https://reqres.in/api/users?page=1");
};
export { fetchAllUser };
