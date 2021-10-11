import { useContext } from "react";
import socketContext, {
  SocketState,
} from "../../contexts/socket/socketContext";

const SocketHelper = () => {
  const { socket, changeSocket } = <SocketState>useContext(socketContext);

  return { socket, changeSocket };
};

export default SocketHelper;
