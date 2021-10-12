import { useEffect } from "react";
import { useParams } from "react-router";
import SocketHelper from "../helpers/socket/SocketHelper";
import UserHelper from "../helpers/user/UserHelper";
import { UrlParams } from "../pages/class/useViewClass";

const useJoinRoom = () => {
  const { socket } = SocketHelper();
  const { user } = UserHelper();
  const { id } = useParams<UrlParams>();

  useEffect(() => {
    if (!id || !socket) return;

    console.log("Joined room", id);

    socket.emit("join-class-room", { id: id, user: user?.email });

    return () => {
      socket.emit("leave-room", id);
      socket.off("join-class-room");
      console.log("Leaved room", id);
    };
  }, [id, socket]);
};

export default useJoinRoom;
