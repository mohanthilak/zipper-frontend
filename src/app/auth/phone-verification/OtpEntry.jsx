import React from 'react'

const OtpEntry = ({OTP, setOTP}) => {
  return (
    <div>
        <div className="input-box">
            <label className="text-md font-semibold" htmlFor="">Enter OTP</label><br />
            <input className="input-styling rounded-md w-[100%]" value={OTP} onChange={(e)=>setOTP(e.target.value)} type="number" /> 
        </div>
    </div>
  )
}

export default OtpEntry