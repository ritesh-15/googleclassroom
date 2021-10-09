import api from "../axios";

export const createNewClass = (data: any) => api.post("/c/new-class", data);

export const getClassDetails = (id: any) => api.get(`/c/get/details/${id}`);

export const uploadBanner = (data: any) => api.post("/c/upload/banner", data);

export const joinClassRoom = (data: any) => api.post("/c/join-class", data);

export const getJoinedClasses = () => api.get("/c/get-joined-classes");

export const getCreatedClasses = () => api.get("/c/get-created-classes");

export const getPeoples = (id: string) => api.get(`/c/peoples/${id}`);
