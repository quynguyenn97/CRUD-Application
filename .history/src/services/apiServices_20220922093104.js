import axios from "axios";
const getListUser = (data) => {
    return axios.get("https://reqres.in/api/users?page=1");
};
export { getListUser };
