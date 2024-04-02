"use client"
import React, { useRef } from 'react'
import { AiOutlineLeft, AiOutlineRight} from "react-icons/ai"


const CurrentlyBorrowedComponent = () => {

    const currentlyBorrowedRef = useRef();
    

    const ScrollListWithRefAndOffset = (reff, scrollOffset) => {
        reff.current.scrollLeft += scrollOffset; 
    }
  return (
    <div className='w-96 md:w-2/3 shadow-2xl rounded-3xl h-[310px] p-5'>
        <div className=' flex justify-between'>
            <h1 className='font-bold text-2xl underline'>Currently Borrowed</h1>
            <div className='flex gap-5 pr-5'>
                <AiOutlineLeft onClick={() => ScrollListWithRefAndOffset(currentlyBorrowedRef,-230)} className='rounded-xl bg-blue-100 p-1 cursor-pointer' style={{ fill: '#002379' }} size={25} />
                <AiOutlineRight onClick={() => ScrollListWithRefAndOffset(currentlyBorrowedRef,230)} className='rounded-xl bg-blue-100 p-1 cursor-pointer' style={{ fill: '#002379' }} size={25} />
            </div>
        </div>

        <div ref={currentlyBorrowedRef} className="p-10 books noScollbar flex gap-10  overflow-scroll [&>div]:flex-shrink-0">
            <div className='flex flex-col items-center gap-2'>
                <div>
                    <img className='w-24 h-36' src="https://m.media-amazon.com/images/I/71t4GuxLCuL._AC_UF1000,1000_QL80_.jpg" alt="" />
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <div>
                        <p className='text-sm font-semibold'>Billing: Rs 80.00/-</p>
                    </div>
                    <button className='border border-black w-24'>Return</button>
                </div>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <div>
                    <img className='w-24 h-36' src="https://m.media-amazon.com/images/I/71t4GuxLCuL._AC_UF1000,1000_QL80_.jpg" alt="" />
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <div>
                        <p className='text-sm font-semibold'>Billing: Rs 80.00/-</p>
                    </div>
                    <button className='border border-black w-24'>Return</button>
                </div>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <div>
                    <img className='w-24 h-36' src="https://m.media-amazon.com/images/I/71t4GuxLCuL._AC_UF1000,1000_QL80_.jpg" alt="" />
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <div>
                        <p className='text-sm font-semibold'>Billing: Rs 80.00/-</p>
                    </div>
                    <button className='border border-black w-24'>Return</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CurrentlyBorrowedComponent