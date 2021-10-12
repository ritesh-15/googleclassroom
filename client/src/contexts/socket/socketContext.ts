import { createContext } from "react";
import { Socket } from "socket.io-client";

export interface SocketState {
  socket: Socket | null;
}

const socketContext = createContext<SocketState | null>(null);

export default socketContext;
