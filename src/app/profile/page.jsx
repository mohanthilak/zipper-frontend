"use client"

import React, { useEffect, useState } from 'react'
import UserDetails from './UserDetails'
import DepositeComponent from './DepositeComponent'
import CurrentlyBorrowedComponent from './CurrentlyBorrowedComponent'
import PageHeading from '@/Components/PageHeading'
import useProtectedRoutes from '@/Hooks/useProtectedRoutes'
import useAuth from '@/Hooks/useAuth'
import { useRouter } from 'next/navigation'
import useAxiosPrivate from '@/Hooks/useAxiosPrivate'
import Head from 'next/head'

const Profile = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);

  const {auth} = useAuth()
  const protectRoute = useProtectedRoutes();
  const { push } = useRouter();
  let userPath = ""
    userPath = process.env.NEXT_PUBLIC_User_Prod_URL
  const axiosPrivate = useAxiosPrivate()
  
  useEffect(()=>{
    async function check(){
      const result = await protectRoute()
      if(!result) push("/auth/login")
      else console.log(auth)
    }
    check()
  }, [])
  

  useEffect(()=>{
    axiosPrivate.get(userPath+"/user").then(res=>{
      if(res.data.success){
        // setDeposit(res.data.data.deposit);
        setEmail(res.data.data.email);
        setPhoneNumber(res.data.data.phoneNumber);
        setName(res.data.data.name)
      }
    })
    
    
  }, [auth])

  return (
    <>
    <Head>
      <script defer src='https://checkout.razorpay.com/v1/checkout.js'></script>
    </Head>
    <div className='px-16 w-full mt-32 md:mt-8'>
        <div className=''>
          <PageHeading title={"Profile Page"}/>
        </div>

        <div className='flex flex-col  items-center gap-10 md:flex-row md:justify-between'>
            <CurrentlyBorrowedComponent />
            <DepositeComponent />
        </div>
         <UserDetails name={name} phoneNumber={phoneNumber} email={email} /> 
    </div>
    </>
  )
}

export default Profile