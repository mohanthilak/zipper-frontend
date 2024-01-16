"use client";
import { useContext, useDebugValue } from "react";
import LibraryContexts from "@/Contexts/libraries";

const useUserLibraries = () => {
//   const { libraries } = useContext(LibraryContexts);
  return useContext(LibraryContexts);
};

export default useUserLibraries;