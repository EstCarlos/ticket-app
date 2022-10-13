import React from "react";
import { createContext } from "react";
import { useSocket } from "../hooks/useSocket";

export const SocketContext = createContext();

//Aqui expone si estamos Online y expone el SOcket quien escucha y emite
export const SocketProvider = ({ children }) => {
  const { socket, online } = useSocket("http://localhost:8080");

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
