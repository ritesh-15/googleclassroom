import { ReactElement, useState } from "react";
import SocketContext from "./socketContext";

const SocketProvider = ({ children }: { children: ReactElement }) => {
  const [socket, setSocket] = useState(null);

  const changeSocket = (val: any): void => {
    setSocket(val);
  };

  return (
    <SocketContext.Provider value={{ socket, changeSocket }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
