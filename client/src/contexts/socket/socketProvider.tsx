import { ReactElement, useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";
import SocketContext from "./socketContext";

const SocketProvider = ({ children }: { children: ReactElement }) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = io("http://localhost:9000", {
      forceNew: true,
    });
    setSocket(newSocket);

    console.log("New socket connection");

    return () => {
      newSocket.close();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
