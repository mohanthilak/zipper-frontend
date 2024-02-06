"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
// import { redirect } from 'next/server';

const Page = () => {
  const { push } = useRouter();
  useEffect(()=>{
    push("/menupage")

  },[])
  // redirect('/menupage');

  return (
    <>
      hello world
    </>
  )
}

export default Page