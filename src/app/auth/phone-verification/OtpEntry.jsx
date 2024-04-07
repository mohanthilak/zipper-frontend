import React, { useEffect } from 'react'

const OtpEntry = ({OTP, setOTP}) => {
  useEffect(()=>{
    alert("OTP:123456")
  }, [])
  return (
    <div>
        <div className="input-box">
            <label className="text-md font-semibold" htmlFor="">Enter OTP</label><br />
            <input className="input-styling rounded-md w-[100%] h-10" value={OTP} onChange={(e)=>setOTP(e.target.value)} type="number" /> 
        </div>
    </div>
  )
}

export default OtpEntry