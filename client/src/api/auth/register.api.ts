import api from "../axios";

const newRegister = (data: any) => api.post("/register", data);

export const checkUser = (email: string) => api.get(`/user/${email}`);

// log out route

export const logout = () => api.delete("/v/logout");

export default newRegister;
