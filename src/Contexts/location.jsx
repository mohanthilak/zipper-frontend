"use client"
import { createContext, useState } from "react";

const LocationContext = createContext({});

export const LocationProvider = ({children}) => {
    const [userLocation, setUserLocation] = useState({});
    return (
        <LocationContext.Provider value={({userLocation, setUserLocation})}>
            {children}
        </LocationContext.Provider>
    )
}

export default LocationContext