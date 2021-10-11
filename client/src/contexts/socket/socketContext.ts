import { createContext } from "react";

export interface SocketState {
  socket: any;
  changeSocket(val: any): void;
}

const socketContext = createContext<SocketState | null>(null);

export default socketContext;
