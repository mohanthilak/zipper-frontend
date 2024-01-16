import React from 'react'
import "./layout.css";
const layout = ({children}) => {
  return (
    <div>
        <div className="h-20 flex items-center">
          <h1 className="text-5xl font-bold text-[#002379] ml-[5%]">zipper</h1>
      </div>
      <div className="auth-page">
        <div className="auth-type-container">
            {children}
        </div>
        </div></div>
  )
}

export default layout