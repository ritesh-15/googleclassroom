import api from "../axios";

const login = (data: any) => api.post("/login", data);

export const refresh = () => api.get("/v/refresh");

export default login;
