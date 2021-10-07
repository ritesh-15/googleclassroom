import UserInterface from "../interfaces/user/user-interface";

class UserDto {
  name;
  email;
  avatar;
  _id;

  constructor(user: UserInterface) {
    this.name = user.name;
    this._id = user._id;
    this.email = user.email;
    this.avatar = user.avatar;
  }
}

export default UserDto;
