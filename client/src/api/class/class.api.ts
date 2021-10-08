import api from "../axios";

export const createNewClass = (data: any) => api.post("/c/new-class", data);

export const getClassDetails = (id: any) => api.get(`/c/get/details/${id}`);

export const uploadBanner = (data: any) => api.post("/c/upload/banner", data);
