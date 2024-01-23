"use client"
import Link from 'next/link'
import React from 'react'

const DepositeComponent = ({deposite}) => {
  return (
    <div className='shadow-2xl rounded-3xl h-[310px] w-72 md:w-1/4 p-5 flex flex-col justify-between'>
        <div className=''>
            <h1 className='font-bold text-2xl underline'>Your Deposite</h1>
        </div>
        <div className='flex justify-center'>
            <h1 className='font-bold text-3xl '>Rs. {deposite}/-</h1>
        </div>
        <div className='flex justify-between'>
            <Link href={"#"} className='font-semibold text-lg' >Add +</Link>
            <Link href={"#"} className='font-semibold text-lg' >Withdraw -</Link>
        </div>
    </div>
  )
}

export default DepositeComponent