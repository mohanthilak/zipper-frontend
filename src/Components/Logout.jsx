import React from 'react'
import useAuth from '@/Hooks/useAuth';
import useAxiosPrivate from '@/Hooks/useAxiosPrivate';
import { useRouter } from 'next/navigation';

const Logout = () => {
    const axiosPrivate = useAxiosPrivate()
    
    const {auth, setAuth} = useAuth()
    const {push} = useRouter()
    let userPath = ""
    userPath = process.env.NEXT_PUBLIC_User_Prod_URL
    const handleLogout = () => {
      axiosPrivate.post(userPath+"/user/logout", {
        accessToken: auth.accessToken
      }).then(res=>{
        if(res.data.success){
          setAuth({});
          push("/auth/login")
        }
      }).catch(e=>{
        console.error("error while logging out:",e)
      })
    }
  return (
    <div>
        <p onClick={handleLogout} className='text-sm cursor-pointer'>Logout</p>
    </div>
  )
}

export default Logout