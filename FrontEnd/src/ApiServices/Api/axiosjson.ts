import axios from "axios";
import store from "../../Redux/store";
import { LogoutUsers } from "../../Redux/slice/Auth/reducers";
import { toast } from "sonner";
import AuthAxios from "./loginaxios"

const apiUrl = import.meta.env.VITE_API_URL;
console.log(apiUrl);

const axiosInstance = axios.create({
  baseURL: `${apiUrl}/api`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials:true
});

axiosInstance.interceptors.response.use(
(response) => response,
async (error) => {
const originalRequest = error.config;

if (error.response?.status === 401 && !originalRequest._retry) {
originalRequest._retry = true;

const code = error.response?.data?.CODE;

switch (code) {
case "REFRESH_MISSING":
case "REFRESH_INVALID":
case "USER_INVALID":
store.dispatch(LogoutUsers());
toast.error("Session expired. Please login again.");
return Promise.reject(error);

case "ACCESS_MISSING":
case "ACCESS_INVALID":
try {
await AuthAxios.get("/GenarateAccess");
return axiosInstance(originalRequest); // retry with new access token
} catch (refreshError) {
store.dispatch(LogoutUsers());
toast.error("Session expired. Logging out...");
return Promise.reject(refreshError);
}

default:
// Unknown 401 → logout
store.dispatch(LogoutUsers());
toast.error("Unauthorized. Please login again.");
return Promise.reject(error);
}
}

return Promise.reject(error);
}
);
      
export default axiosInstance;
