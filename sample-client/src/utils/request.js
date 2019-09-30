import axios from "axios";
import tokenProvider from "axios-token-interceptor";

// import constants from 'shared/constants'

// axios.defaults.headers.common["AUTHORIZATION"] = localStorage.getItem("token");

/**
 * Create an Axios Client with defaults
 */
const client = axios.create({
  baseUrl: "http://localhost:9090"
});

/**
 * Request Wrapper with default success/error actions
 */
const request = function (options) {
  const onSuccess = function (response) {
    console.debug("Request Successful!", response);
    return response.data;
  };

  const onError = function (error) {
    console.error("Request Failed:", error.config);

    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
      console.error("Headers:", error.response.headers);
    } else {
      // Something else happened while setting up the request
      // triggered the error
      console.error("Error Message:", error.message);
    }

    return Promise.reject(error.response || error.message);
  };

  options.headers = {
    Authorization: `Bearer ${sessionStorage.getItem("token")}`
  };

  return client(options)
    .then(onSuccess)
    .catch(onError);
};

export default request;
