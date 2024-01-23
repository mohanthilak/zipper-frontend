import React, { useEffect, useState } from 'react'
import {AiOutlineBell} from "react-icons/ai"
import { RxEnter } from "react-icons/rx";

import "./notificationBar.css"
import useSocket from '@/Hooks/useSocket';
import Link from 'next/link';
import useAuth from '@/Hooks/useAuth';
import useAxiosPrivate from '@/Hooks/useAxiosPrivate';
import axios from '@/Axios/axios';

const NotificationBell = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showRedDot, setShowRedDot] = useState(false);
  const [notificationList, setNotificationList] = useState([]);
  
  const {socket} = useSocket();
  const {auth} = useAuth()
  const axiosPrivate = useAxiosPrivate()
  
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  
  useEffect(()=>{
    if(auth?.uid){
      console.log({auth: auth.uid})
      axiosPrivate.get(`http://localhost:8000/${auth.uid}`).then(res=>{
        if(res.data.success){
          setNotificationList(res.data.data)
        }
      }).catch(e=>{
        console.log("Notifications fetching error: ", e)
      })
    }
  }, [auth])
  
  useEffect(()=>{
    socket?.addEventListener("message", (event) => {
      const data = JSON.parse(event.data)
      if(data.type === "Notification"){
        if(data.payload.operation === "Notify-lender"){
          if(data.payload.message === 'A user has requested for the book'){
            setNotificationList(prev=> [{type:"borrow", message: "A user has requested for the book"},...prev])
          }
        }
      }
      setShowRedDot(true)
    });
  }, [socket])

  return (
    <div className= {`relative ${showDropdown ? "bg-gray-100" : ""} p-1 rounded-full`}>
      <div>
        {showRedDot && <div className='w-[10px] h-[10px] bg-red-700 rounded-full absolute top-2 left-5'></div>}
        <AiOutlineBell  className='cursor-pointer' size={30} onClick={toggleDropdown} />
      </div>
        {showDropdown && (
          <div className='notification-scrollbar absolute top-[140%] rounded-xl right-0  w-80 max-h-52 overflow-y-auto bg-white border border-black z-10' style={{scrollbarWidth: 'thin', 
          scrollbarColor: '#ccc #f0f0f0'}}>
            <div className='border-b-2 border-sky-900 py-2 text-center'>
              <h1 className=' font-semibold'>Your Notification</h1>
            </div>
            {notificationList?.length > 0  && notificationList.map((el,i)=>(
              <Link key={i} href="/lending-dashboard">
                <div className={`p-3 border-b-2 border-[#ccc] hover:bg-${el.type === "borrow" ? "green-200" : "blue-100"} cursor-pointer flex items-center`} >
                  <RxEnter className="rotate-180" size={20}/>
                  <p className='pl-2 text-xs '>{el.message}</p>
                </div>
              </Link>
            ))}
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