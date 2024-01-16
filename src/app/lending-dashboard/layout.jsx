'use client'
import { useEffect } from "react";
import PageHeading from "@/Components/PageHeading";
import useProtectedRoutes from '@/Hooks/useProtectedRoutes'
import NotificationBell from "@/Components/NotificationBell/NotificationBell";
import { useRouter } from "next/navigation";

const Layout = ({children}) => {
    const protectRoute = useProtectedRoutes();
    const { push } = useRouter();
    useEffect(()=>{
        async function check(){
          const result = await protectRoute()
          if(!result) push("/auth/login")
        }
        check()
      }, [])
    return (
        <div className='mt-28 md:mt-10 px-10 md:w-[80%] w-[100%]'>
          <div className="flex justify-between">
            <PageHeading title={"Lending Dashboard"} />
            <NotificationBell />
          </div>
        <div className='h-[88%] mt-10  w-full '>
            {children}
        </div>
      </div>
    )
}

export default Layout;