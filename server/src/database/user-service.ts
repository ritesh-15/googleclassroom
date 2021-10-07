import User from "../models/user-modal";

class UserService {
  async findUser(query: any) {
    return await User.findOne(query);
  }

  async createUser(data: any) {
    return await User.create(data);
  }
}
export default new UserService();
