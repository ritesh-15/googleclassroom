import { useDispatch } from "react-redux";
import { setMessage, unSetMessage } from "../../reducers/message/messageSlice";

const MessageHelper = () => {
  const dispatch = useDispatch();

  const changeMessage = (message: string, type?: string): void => {
    dispatch(
      setMessage({
        message,
        open: true,
        type: type ? type : "success",
      })
    );

    setTimeout(() => {
      dispatch(unSetMessage());
    }, 3000);
  };

  return { changeMessage };
};

export default MessageHelper;
