import React from 'react'

const ProfileImage = ({profilePicture}) => {
  return (
    <img src={profilePicture} className=' rounded-lg w-16 h-16'  />
  )
}

export default ProfileImage