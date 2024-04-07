"use client"
import useAuth from '@/Hooks/useAuth';
import useAxiosPrivate from '@/Hooks/useAxiosPrivate';
import useProtectedRoutes from '@/Hooks/useProtectedRoutes';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react'

const UserDetails = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const {auth, setAuth} = useAuth()

  const {push} = useRouter()
    
    const axiosPrivate = useAxiosPrivate()
    const protectRoute = useProtectedRoutes();
    
    let userPath = ""
    console.log({PRODUSERURL:process.env.NEXT_PUBLIC_User_Prod_URL})
    userPath = process.env.NEXT_PUBLIC_User_Prod_URL  

    useEffect(()=>{
        async function check(){
          const result = await protectRoute()
          if(!result)push("/auth/login")
          else checkIfNameVerified()
        }
        function checkIfNameVerified(){
          if(!auth?.verificationStatus.includes('name-entry')) push('/menupage')
        }
      check();
    }, [])

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(firstName === "") {
      
      alert("Enter First Name");
      return;
    }

    axiosPrivate.post(userPath+"/user/update-name", {
      firstName, lastName
    }).then(res=>{
      console.log(res)
      if(res.data.success){
        const {data} = res.data;
        const authData = auth;
        authData.name = firstName + " " + lastName;
        setAuth(authData)
        if(data.verificationStatus.includes('phone-verification')) push("/auth/phone-verification")
      }
    })
  }
  return (
    <div className='w-96'>
      <div>
        <h3 className="font-bold pb-8  text-xl">Enter Your Details</h3>
      </div>

      <div className='input-box'>
        <label className="text-md font-semibold" htmlFor="">First Name</label><br />
        <input className="input-styling rounded-md w-[100%] h-10" value={firstName} onChange={(e)=>setFirstName(e.target.value)} type="text" /> 
      </div>
      <div className='input-box'>
        <label className="text-md font-semibold" htmlFor="">Last Name</label><br />
        <input className="input-styling rounded-md w-[100%] h-10" value={lastName} onChange={(e)=>setLastName(e.target.value)} type="text" /> 
      </div>
      <button onClick={handleSubmit} className="submit-btn mb-3 h-10 w-full">
          Next
        </button>
    </div>
  )
}

export default UserDetails