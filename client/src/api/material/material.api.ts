import api from "../axios";

export const postNewMaterial = (data: any) => api.post("/m/new-material", data);

export const getTopics = (id: any) => api.get(`/m/get-topics/${id}`);
