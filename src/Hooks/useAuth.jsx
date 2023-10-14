"use client";
import { useContext, useDebugValue } from "react";
import AuthContext from "@/Contexts/useAuth";

const useAuth = () => {
  const { auth } = useContext(AuthContext);
  useDebugValue(auth, (auth) => (auth?.uid ? "Logged In" : "Logged Out"));
  return useContext(AuthContext);
};

export default useAuth;