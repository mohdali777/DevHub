import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
console.log(apiUrl);

const axiosInstance = axios.create({
  baseURL: `${apiUrl}/api/auth`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials:true
});

export default axiosInstance;
