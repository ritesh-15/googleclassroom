import api from "../axios";

export const createNewClass = (data: any) => api.post("/v/new-class", data);
