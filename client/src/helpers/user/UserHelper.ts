import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setUser, UserState } from "../../reducers/user/userSlice";

const UserHelper = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();

  const changeUser = (userData: {
    name: string;
    email: string;
    avatar: string;
    _id: string;
  }) => {
    dispatch(setUser(userData));
  };

  return { user, changeUser };
};

export default UserHelper;
