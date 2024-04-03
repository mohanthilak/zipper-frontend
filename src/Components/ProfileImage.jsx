import Image from 'next/image'
import React from 'react'

const ProfileImage = ({profilePicture}) => {
  return (
    <Image src={profilePicture} className=' rounded-lg w-16 h-16' />
    // <img src={profilePicture}   />
  )
}

export default ProfileImage