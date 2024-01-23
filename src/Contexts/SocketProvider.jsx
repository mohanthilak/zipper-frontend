"use client"
import { createContext, useEffect, useState } from "react";

const SocketContext = createContext({});

export const SocketProvider = ({children}) => {
    const [socket,setSocket] = useState();
    useEffect(()=>{
        const ss = new WebSocket("ws://127.0.0.1:8000/ws/123");
        setSocket(ss);
    },[])
    return (
        <SocketContext.Provider value={({socket})}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketContext