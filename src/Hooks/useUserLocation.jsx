"use client";
import { useContext, useDebugValue } from "react";
import LocationContext from "@/Contexts/location";

const useUserLocation = () => {
  const { userLocation } = useContext(LocationContext);
  useDebugValue(userLocation, (userLocation) => (userLocation ? `latitude:${userLocation.latitude}, longitude:${userLocation.longitude}` : ""));
  return useContext(LocationContext);
};

export default useUserLocation;