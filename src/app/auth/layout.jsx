import React from 'react'
import "./layout.css";
const layout = ({children}) => {
  return (
    <div>
        <div className="h-14 flex items-center px-6">
          <h1 className="text-4xl font-bold text-[#00046A] ">zipper</h1>
      </div>
      <div className="auth-page">
        <div className="auth-type-container">
            {children}
        </div>
        </div></div>
  )
}

export default layout