import { useContext } from "react";
import socketContext, {
  SocketState,
} from "../../contexts/socket/socketContext";

const SocketHelper = () => {
  const { socket } = <SocketState>useContext(socketContext);

  return { socket };
};

export default SocketHelper;
