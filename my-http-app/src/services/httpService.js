import axios from "axios";
import logger from "./logService";
import { toast } from "react-toastify";

// simply by adding this interceptor we can intercept the request

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    // unexpected error, so log and give a pleasant generic message
    logger.log(error);
    toast.error("An unexpected error occurrred.");
  }

  return Promise.reject(error);
});

// wraps which implementation of httpService to use
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};
