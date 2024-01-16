import React, { useEffect, useState } from 'react'
import {AiOutlineBell} from "react-icons/ai"
import { RxEnter } from "react-icons/rx";

import "./notificationBar.css"

const NotificationBell = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  
  useEffect(()=>{
    const socket = new WebSocket("ws://127.0.0.1:8000/ws/123");

  }, [])

  return (
    <div className= {`relative ${showDropdown ? "bg-gray-100" : ""} p-1 rounded-full`}>
        <AiOutlineBell  className='cursor-pointer' size={30} onClick={toggleDropdown} />
        {showDropdown && (
          <div className='notification-scrollbar absolute top-[140%] rounded-xl right-0  w-80 max-h-52 overflow-y-auto bg-white border border-black z-10' style={{scrollbarWidth: 'thin', 
          scrollbarColor: '#ccc #f0f0f0'}}>
            <div className='border-b-2 border-sky-900 py-2 text-center'>
              <h1 className=' font-semibold'>Your Notification</h1>
            </div>
            <div className=' p-3 border-b-2 border-[#ccc] hover:bg-green-200 cursor-pointer flex items-center' >
              <RxEnter className="rotate-180" size={20}/>
              <p className='pl-2 text-xs '>Someone wants to borrow the bokk 1</p>
            </div>
            <div className=' p-3 border-b-2 hover:bg-blue-100 border-[#ccc] flex items-center cursor-pointer'>
              <RxEnter color='white'  size={20}/>
              <p className='pl-2 text-xs'>Your borrower wants to return the book</p>
            </div>
          </div>
        )}
    </div>
  )
}

export default NotificationBell