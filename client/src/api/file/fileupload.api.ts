import api from "../axios";

export const uploadFile = (data: any) => api.post("/f/new-file", data);
