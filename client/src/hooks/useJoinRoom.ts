import { useEffect } from "react";
import SocketHelper from "../helpers/socket/SocketHelper";
import UserHelper from "../helpers/user/UserHelper";

const useJoinRoom = (id: string) => {
  const { socket } = SocketHelper();
  const { user } = UserHelper();

  useEffect(() => {
    if (!socket) return;
    console.log("Joined");
    socket.emit("join-class-room", { id, user: user?.email });
  }, [id]);
};

export default useJoinRoom;
