import axios from "axios";
import NProgress from "nprogress";

NProgress.configure({
    showSpinner: false,
    trickleSpeed: 100,
});

const instance = axios.create({
    baseURL: "https://reqres.in",
});

instance.interceptors.request.use(
    function (config) {
        NProgress.start();
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);
// Add a response interceptor
instance.interceptors.response.use(
    function (response) {
        NProgress.done();
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data ? response.data : { statusCode: response.status };
    },
    function (error) {
        NProgress.done();

        let res = {};
        if (error.response) {
            NProgress.done();
            // Request made and server responded
            res.data = error.response.data;
            res.status = error.response.status;
            res.headers = error.response.headers;
        } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
        }
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return res;
        // return Promise.reject(error);
    }
);
export default instance;
