import { AxiosError } from "axios";
import { toast } from "sonner";
import axiosInstance from "../../Api/axiosjson";
import type { USER_DTO } from "../../../Interface/user";

export default class UserService {
static async FindById(id: string): Promise<USER_DTO | null | void> {
try {
if(!id){
toast.error("something went wrong");
return 
} 
const response = await axiosInstance.get<USER_DTO|null>(`/user/${id}`);
return response?.data?.data as USER_DTO ;
} catch (error) {
if(error instanceof AxiosError){ 
toast.error(error.response?.data?.message || "Failed to fetch user data")
throw new Error(error.response?.data?.message || "Failed to fetch user data")
}else{
throw new Error("An unexpected error occurred")
}
}
}
}