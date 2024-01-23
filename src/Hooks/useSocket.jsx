"use client";
import { useContext, useDebugValue } from "react";
import SocketContext from "@/Contexts/SocketProvider";

const useSocket = () => {
  return useContext(SocketContext);
};

export default useSocket;