import React from 'react'

const NumberEntry = ({phoneNumber, setPhoneNumber, setDisplayOTP}) => {
  const updatePhoneNumber = (e)=>{
    e.preventDefault();
    setDisplayOTP(false)
    setPhoneNumber(e.target.value);
  }
  return (
    <div>
        <div>
            <h3 className="font-bold pb-12  text-xl">Get Your Phone Number Verified</h3>
        </div>
        <div className="input-box">
            <label className="text-md font-semibold" htmlFor="">Enter Your Phone Number</label><br />
            <input className="input-styling rounded-md w-[100%]" value={phoneNumber} onChange={updatePhoneNumber} type="number" /> 
        </div>
    </div>
  )
}

export default NumberEntry