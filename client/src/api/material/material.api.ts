import api from "../axios";

export const postNewMaterial = (data: any) => api.post("/m/new-material", data);

export const getTopics = (id: any) => api.get(`/m/get-topics/${id}`);

export const getMaterials = (classId: string, topic: string) =>
  api.get(`/m/get-materials?classId=${classId}&topic=${topic}`);

export const getClassroomTopics = (classId: string) =>
  api.get(`/m/topics?classId=${classId}`);
