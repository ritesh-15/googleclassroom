import { createContext } from "react";
import { Socket } from "socket.io-client";

export interface SocketState {
  socket: Socket | null;
  changeSocket(val: any): void;
}

const socketContext = createContext<SocketState | null>(null);

export default socketContext;
