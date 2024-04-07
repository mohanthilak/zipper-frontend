import React, {useEffect, useState} from 'react'
import Logout from '@/Components/Logout';
import LocationModal from '@/Components/LocationModal'

import {AiOutlineRight} from "react-icons/ai"
import useAuth from '@/Hooks/useAuth';
import ProfileImage from './ProfileImage';
import useUserLocation from '@/Hooks/useUserLocation';
import axios from '@/Axios/axios';
import Link from 'next/link';
import useAxiosPrivate from '@/Hooks/useAxiosPrivate';
import useUserLibraries from '@/Hooks/useLibraries';

const Sidebar = () => {
    const {auth} = useAuth();
    const [area, setArea] = useState("")
    const {userLocation} = useUserLocation();
    const axiosPrivate = useAxiosPrivate();
    const [showLocationModal, setShowLocationModal] = useState(false);
    const {handleSetLibraries} = useUserLibraries();
    let libraryPath = ""
    libraryPath = process.env.NEXT_PUBLIC_Library_Prod_URL

    useEffect(()=>{
      if(userLocation.latitude && process.env.NEXT_PUBLIC_GeoCodeAccessToken){
        axios.get(`https://us1.locationiq.com/v1/reverse?key=${process.env.NEXT_PUBLIC_GeoCodeAccessToken}&lat=${userLocation.latitude}&lon=${userLocation.longitude}&format=json`).then(res=>{
          if(res.data.address.neighbourhood){
            setArea(res.data.address.neighbourhood)
          }else if(res.data.address.suburb){
            setArea(res.data.address.suburb)
          }
        }).catch(e=>{
          console.log("could not fetch the address from coordinates: ", e)  
        })
      }
    }, [userLocation])

    
    const toggleShowLocationModal = () => {
      // e.preventDefault();
      setShowLocationModal(e=>!e);
    }

    useEffect(()=>{
      if(auth?.uid){
        axiosPrivate.get(libraryPath+`/library/uid/${auth.uid}`).then(res=>{
          if(res.data.success){
            handleSetLibraries(res.data.data)
          }
        })

      }
    }, [auth])
  return (
    <div className='hidden md:flex h-screen sticky top-0 border w-[20%] min-w-[250px]  bg-[#F4F4F6] pt-10 p-6  flex-col justify-between'>
        {showLocationModal ? <LocationModal toggleShowLocationModal={toggleShowLocationModal}  />:""}
    
    <div className='flex gap-5 items-center '>

        <div className="w-[40%]">
            {auth ? <ProfileImage profilePicture={auth.profilePicture} /> : <></>}
             
          {/* <img className=' rounded-lg w-16 h-16' src={propic} alt="" /> */}
        </div>
        <div className="w-[60%]">
          <h1 className='text-xl font-bold mb-1 text-[#002379]'>{auth?auth.name:""}</h1>
          <div className='flex flex-col gap-1  mb-2'>
            <p className='text-xs font-semibold leading-4'>{area}</p>
            <p onClick={toggleShowLocationModal} className='cursor-pointer text-[0.7rem]  underline'>Change?</p>
          </div>
          <Logout />
          {/* <p className='text-xs underline'>See the Lending Dashboard</p> */}
        </div> 
    </div>

      <div className='flex flex-col py-2'>
        {/* <div className='cursor-pointer'>
          <h1 className='font-semibold md:text-lg lg:text-xl '>Lending:</h1>
        </div> */}
        <Link href="/lending-dashboard">
          <div className='flex justify-between items-center  hover:underline cursor-pointer'>
            <h1 className='font-semibold lg:text-xl '>Lending Dashboard</h1>
            <AiOutlineRight  size={15}/>
          </div>
        </Link>
      </div>
      
      <div className='flex flex-col'>
        <Link href="/menupage">
          <div className='flex justify-between items-center py-1 hover:underline cursor-pointer'>
            <h1 className='font-semibold md:text-lg lg:text-xl '>Home</h1>
            <AiOutlineRight  size={15}/>
          </div>
        </Link>
      </div>
      
      <div className='flex flex-col'>
        <Link href="/profile">
          <div className='flex justify-between items-center py-1 hover:underline cursor-pointer'>
            <h1 className='font-semibold md:text-lg lg:text-xl '>Profile</h1>
            <AiOutlineRight  size={15}/>
          </div>
        </Link>
      </div>
      
      <div className='flex flex-col'>
        <Link href="/profile">
          <div className='flex justify-between items-center py-1 hover:underline cursor-pointer'>
            <h1 className='font-semibold md:text-lg lg:text-xl '>Return Book</h1>
            <AiOutlineRight  size={15}/>
          </div>
        </Link>
      </div>

      {/* <div className='flex flex-col '>
        <div className='py-2 cursor-pointer'>
          <h1 className='font-semibold text-xl '>Borrowing:</h1>
        </div>
        <div className='flex justify-between items-center py-2 hover:underline cursor-pointer'>
          <h1 className='font-semibold text-lg '>Reading List</h1>
          <AiOutlineRight  size={15}/>
        </div>
        <div className='flex justify-between items-center py-2 hover:underline cursor-pointer'>
          <h1 className='font-semibold text-lg'>Borrowings</h1>
          <AiOutlineRight  size={15}/>
        </div>
        <div className='flex justify-between items-center py-2 hover:underline cursor-pointer'>
          <h1 className='font-semibold text-lg'>Libraries</h1>
          <AiOutlineRight  size={15}/>
        </div>
        <div className='flex justify-between items-center py-2 hover:underline cursor-pointer'>
          <h1 className='font-semibold text-lg'>Books</h1>
          <AiOutlineRight  size={15}/>
        </div>
      </div> */}

      <div>
        <h1 className='font-semibold text-lg py-1 text-[#002379]'>Currently Reading</h1>
        <div className='flex gap-5'>
          <img className=" w-10 h-16"  src="https://m.media-amazon.com/images/I/71t4GuxLCuL._AC_UF1000,1000_QL80_.jpg" alt="" />
          <div>
            <p className='md:text-xs lg:text-sm font-medium'>The Subtle Art of Not Giving a F*ck</p>
            <p className='text-xs font-medium'>Number of weeks: 2</p>
            <p className='text-xs font-medium'>Price: 40</p>
          </div>
        </div>
      </div>
      {/* <h1 className='text-lg text-black'>hi there! {pathname}</h1> */}
  </div>
  )
}

export default Sidebar