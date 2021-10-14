import File from "../models/file-modal";

class FileService {
  async createNewFile(data: any) {
    return await File.create(data);
  }
}

export default new FileService();
