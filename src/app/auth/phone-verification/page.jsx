"use client"

import useAuth from '@/Hooks/useAuth';
import React, { useEffect, useState } from 'react'
import NumberEntry from './NumberEntry';
import OtpEntry from './OtpEntry';
import useAxiosPrivate from '@/Hooks/useAxiosPrivate';
import useProtectedRoutes from '@/Hooks/useProtectedRoutes';
import { useRouter } from 'next/navigation';

const Layout = ({childer}) => {
    
    const [phoneNumber, setPhoneNumber] = useState(0);
    const [otp, setOtp] = useState();
    const {auth, setAuth} = useAuth();
    const [displayOTP, setDisplayOTP] = useState(false);
    
    const {push} = useRouter()
    
    const axiosPrivate = useAxiosPrivate()
    const protectRoute = useProtectedRoutes();
    
    useEffect(()=>{
        async function check(){
          const result = await protectRoute()
          if(!result) push("/auth/login")
        }
        check()
    }, [])

    const handleSubmitPhoneNumber = (e) =>{
      e.preventDefault();
      if (phoneNumber<=0) {
        alert("Enter Phone Number")
        return;  
      }
      axiosPrivate.post("/user/update-phoneNumber", {
        phoneNumber,
      }).then(res=>{
        console.log(res.data);
        if(res.data.success) setDisplayOTP(true);
        else setDisplayOTP(false)
      }).catch(e=>{
        console.log("Error while handling update user phone number request: ",e)
        setDisplayOTP(false)
        if(e.response.data.error === "invalid phone number") alert("invalid phone number")
      })
    }

    const handleOTPSubmit = (e) =>{
      e.preventDefault();
      if(otp <= 0) {
        alert("Enter OTP")
        return;
      }
      console.log(typeof phoneNumber)
      axiosPrivate.post('/user/phone-verification', {
        otp, phoneNumber: parseInt(phoneNumber) 
      }).then(res=>{
        if(res.data.success) push("/menupage")
      }).catch(e=>{
        console.log("Error while handline OTP verification", e);
        let {error} = e.response.data
        if(error === "invalid user-id" || error === "invalid-phoneNumber" || error === "invalid OTP")
          alert(error)
      })
    }

    return (
      <div>
        <NumberEntry setPhoneNumber={setPhoneNumber} phoneNumber={phoneNumber} setDisplayOTP={setDisplayOTP} handleSubmitPhoneNumber={handleSubmitPhoneNumber} />
        {displayOTP && <OtpEntry OTP={otp} setOTP={setOtp} />}
        <button onClick={displayOTP ? handleOTPSubmit : handleSubmitPhoneNumber} className="submit-btn w-full">Submit {displayOTP ? "OTP" : "Phone Number"}</button>
      </div>  
   
  )
}

export default Layout