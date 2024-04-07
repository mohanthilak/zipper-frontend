import React from 'react'

const HomePageHowItWorksBoxes = ({section, heading, body}) => {
  return (
    <div className="w-96 py-2 px-4 flex flex-col gap-4 hover:box-shadow:rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;">
        <p className=" text-sm font-medium text-[#00046A]">{section}</p>
        <h1 className="text-2xl font-semibold text-[#00046A]">{heading}</h1>
        <h6>{body}</h6>
    </div>
  )
}

export default HomePageHowItWorksBoxes