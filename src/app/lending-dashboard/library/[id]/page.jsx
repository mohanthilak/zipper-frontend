"use client"
import useAuth from '@/Hooks/useAuth'
import useAxiosPrivate from '@/Hooks/useAxiosPrivate'
import useUserLibraries from '@/Hooks/useLibraries'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Page = ({params}) => {
  const [library, setLibrary] = useState({})

  const axiosPrivate = useAxiosPrivate()
  const {auth} = useAuth();
  const {handleSetLibraries, libraries, bookBorrowRequest} = useUserLibraries()

  useEffect(()=>{
    axiosPrivate.get(`/library/library/uid/${auth.uid}`).then(res=>{
      if(res.data.success){
        handleSetLibraries(res.data.data)

      }
    })
  }, [])

  useEffect(()=>{
    if(libraries.length > 0)
    libraries.forEach(e => {
      if(e._id == params.id){
        console.log(e)
        setLibrary(e)
        return;
      }
    });

  }, [libraries])

  return (
    <div>

      <div>
        <h1 className='font-semibold text-xl mb-2'>Total Revenue Generated: Rs {library.revenue}/-</h1>
      </div>
      
      <div className='flex justify-center gap-4'>
        <Link href={"/lending-dashboard/add-book"}>
          <div className='bg-[#122042] w-32 h-10 flex items-center justify-center'>
            <p className='text-white font-medium'>Add Book</p>
          </div>
        </Link>
      </div>
      <div className='flex mb-8'>
        {/* left */}
        <div className='mr-4 w-[20%]'>
            <img className=" w-44 h-64 my-3"  src="https://m.media-amazon.com/images/I/710iakVqBcL._AC_UF1000,1000_QL80_.jpg" alt="" />
        </div>
        {/* Right */}
        <div className='flex flex-col gap-4 w-[75%]'>
            <div>
                <p><span className='font-medium'>About:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consequuntur officiis et, consectetur, minima, dolorum sint officia placeat quasi dignissimos nostrum labore recusandae facilis eius iure asperiores maiores!</p>
            </div>
            <div>
                <p ><span className='font-medium'>Latitude :{library && library?.location?.coordinates[0]}</span> </p>
            </div>
            <div>
                <p ><span className='font-medium'>Longitude :</span> {library?.location?.coordinates[1]}</p>
            </div>
            <div>
                <p><span className='font-medium'>Addres:</span> {library.address}</p>
            </div>
        </div>
      </div>


      {library?.books?.length>0 && (
        <div className='mb-2'>
            <div className='mb-4'>
              <h1 className='font-semibold text-xl'>Books</h1>
            </div>
            <div className=' noScollbar flex gap-10 pb-12 overflow-scroll [&>div]:flex-shrink-0'>
              { library?.books?.map((el, i)=>(
                <Link href={`/lending-dashboard/about-book/${el._id}`} key={i}>
                <div className='flex gap-2 w-72 hover:shadow-2xl rounded-2xl' >
                  {console.log(el.photos[0])}
                  <img src={el.photos?.length > 0 ? el.photos[0]:"https://m.media-amazon.com/images/I/81caWwaOOKL._AC_UF894,1000_QL80_.jpg"} className='w-24' />
                  <div>
                    <h1 className='font-semibold text-md mb-2'>{el.name}</h1>

                    <p className='text-sm mb-1'>Price: Rs. {el.mrp}</p>
                    <p className='text-sm mb-1'>Rate: Rs. {el.priceOfBorrowing}/week</p>
                  </div>
                </div>  
                </Link>
              ))}
              {/* <div className='flex gap-2 w-72 '>
                <img src="https://m.media-amazon.com/images/I/81caWwaOOKL._AC_UF894,1000_QL80_.jpg" className='w-24' />
                <div>
                  <h1 className='font-semibold text-md mb-2'>Once Upon a Time in Hollywood</h1>

                  <p className='text-sm mb-1'>Requests: 4</p>
                  <p className='text-sm mb-1'>Rate: Rs. 20/week</p>
                </div>
              </div> */}
            </div>
        </div>
      )}
      
      {bookBorrowRequest.length>0 && (
        <div className='my-2'>
            <div className='mb-4'>
              <h1 className='font-semibold text-xl'>Borrow Requests</h1>
            </div>
            <div className=' noScollbar flex gap-10 pb-12 overflow-scroll [&>div]:flex-shrink-0'>
              { bookBorrowRequest.map((el, i)=>(
                <Link href={`/lending-dashboard/about-book/${el._id}`} key={i}>
                <div className='flex gap-2 w-72 hover:shadow-2xl rounded-2xl' key={i}>
                  <img src="https://m.media-amazon.com/images/I/81caWwaOOKL._AC_UF894,1000_QL80_.jpg" className='w-24' />
                  <div>
                    <h1 className='font-semibold text-md mb-2'>Once Upon a Time in Hollywood</h1>

                    <p className='text-sm mb-1'>Requests: 4</p>
                    <p className='text-sm mb-1'>Rate: Rs. 20/week</p>
                  </div>
                </div>  
                </Link >

              ))}
              {/* <div className='flex gap-2 w-72 '>
                <img src="https://m.media-amazon.com/images/I/81caWwaOOKL._AC_UF894,1000_QL80_.jpg" className='w-24' />
                <div>
                  <h1 className='font-semibold text-md mb-2'>Once Upon a Time in Hollywood</h1>

                  <p className='text-sm mb-1'>Requests: 4</p>
                  <p className='text-sm mb-1'>Rate: Rs. 20/week</p>
                </div>
              </div> */}
            </div>
        </div>
      )}
    </div>
  )
}

export default Page