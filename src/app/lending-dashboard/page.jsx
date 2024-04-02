'use client'
import { useEffect, useState } from 'react';
import Layout from './layout';
import useAxiosPrivate from '@/Hooks/useAxiosPrivate';
import useAuth from '@/Hooks/useAuth';
import Link from 'next/link';
import useUserLibraries from '@/Hooks/useLibraries';

const LendingDashBoard = () => {
  const axiosPrivate = useAxiosPrivate();
  const {handleSetLibraries, borrowedBooks, bookBorrowRequest, libraries} = useUserLibraries()
  const {auth} = useAuth()
  
  let libraryPath = ""
  libraryPath = process.env.NEXT_PUBLIC_Library_Prod_URL

  useEffect(()=>{
    axiosPrivate.get(libraryPath+`/library/uid/${auth.uid}`).then(res=>{
      if(res.data.success){
        handleSetLibraries(res.data.data)
      }
    }).catch(e=>{
      console.warn("Error while loading user libraries", e)
    })
  }, [])
  return (
    <div className='w-full  '>

      <div>
        <h1 className='font-semibold text-xl mb-2'>Total Revenue Generated: Rs 1002/-</h1>
      </div>

      <div className='flex justify-center gap-4'>
        <Link href={"/lending-dashboard/add-book"}>
          <div className='bg-[#122042] w-32 h-10 flex items-center justify-center'>
            <p className='text-white font-medium'>Add Book</p>
          </div>
        </Link>
        <Link href={"/lending-dashboard/create-library"}>
          <div className='bg-[#122042] w-32 h-10 flex items-center justify-center'>
            <p className='text-white font-medium'>Add Library</p>
          </div>
        </Link>
      </div>

      {bookBorrowRequest.length>0 && (
        <div className='my-2'>
            <div className='mb-4'>
              <h1 className='font-semibold text-xl'>Borrow Requests</h1>
            </div>
            <div className=' noScollbar flex gap-10 pb-6 overflow-scroll [&>div]:flex-shrink-0'>
              { bookBorrowRequest.map((el, i)=>(
                <Link href={`/lending-dashboard/about-book/${el._id}`} key={i}>
                <div className='flex gap-2 w-72 hover:shadow-2xl rounded-2xl' >
                  <img src="https://m.media-amazon.com/images/I/81caWwaOOKL._AC_UF894,1000_QL80_.jpg" className='w-24' />
                  <div>
                    <h1 className='font-semibold'>{el.name} - {el.author}</h1>
                    <h6 className='font-medium text-sm mb-2'>{el.library}</h6>
                    <p className='text-sm mb-1'>Requests: {el?.borrowRequests?.length}</p>
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


      {borrowedBooks.length>0 && (
        <div className='my-10'>
          <div className='mb-6'>
            <h1 className='font-semibold text-xl'>Borrowed Books</h1>
          </div>
          <div className=' noScollbar flex gap-10  overflow-scroll [&>div]:flex-shrink-0'>
            {borrowedBooks.map((el,i)=>(
              <div className='flex gap-2 w-72 hover:shadow-2xl rounded-2xl' key={i}>
                <img src="https://m.media-amazon.com/images/I/81caWwaOOKL._AC_UF894,1000_QL80_.jpg" className='w-24' />
                <div>
                  <h1 className='font-semibold text-md mb-2'>Once Upon a Time in Hollywood{el.name}</h1>

                  <p className='text-sm mb-1'>Weeks Completed: 0</p>
                  <p className='text-sm mb-1'>Rate: Rs. 20/week</p>
                  <p className='text-sm mb-1'>Borrower: Jack Septiceye</p>
                </div>
              </div>  
            ))}
            {/* <div className='flex gap-2 w-72 '>
              <img src="https://m.media-amazon.com/images/I/81caWwaOOKL._AC_UF894,1000_QL80_.jpg" className='w-24' />
              <div>
              <h1 className='font-semibold text-md mb-2'>Once Upon a Time in Hollywood</h1>
              
              <p className='text-sm mb-1'>Weeks Completed: 0</p>
              <p className='text-sm mb-1'>Rate: Rs. 20/week</p>
              <p className='text-sm mb-1'>Borrower: Jack Septiceye</p>
              </div>
            </div>
            <div className='flex gap-2 w-72 '>
              <img src="https://m.media-amazon.com/images/I/81caWwaOOKL._AC_UF894,1000_QL80_.jpg" className='w-24' />
              <div>
              <h1 className='font-semibold text-md mb-2'>Once Upon a Time in Hollywood</h1>
              
              <p className='text-sm mb-1'>Weeks Completed: 0</p>
              <p className='text-sm mb-1'>Rate: Rs. 20/week</p>
              <p className='text-sm mb-1'>Borrower: Jack Septiceye</p>
              </div>
            </div> */}
          </div>
        </div>
      )}


      <div className='my-8'>
          <div className='mb-2'>
            <h1 className='font-semibold text-xl'>Libraries</h1>
          </div>
          <div className=' noScollbar flex gap-10 pb-10 overflow-scroll [&>div]:flex-shrink-0'>
            {libraries.length && libraries.map((el,i)=>(
              <div className=' w-80 hover:shadow-2xl rounded-2xl' key={i}>
                  <div className='mb-2'>
                  <Link href={`/lending-dashboard/library/${el._id}`} >
                    <h1 className='font-semibold text-md'>{el.name}</h1>
                    <p className=' font-light'>Hebbal, Bangalore</p>
              </Link>
                  </div>
                  <div className='flex items-center gap-2'>
                    <img src="https://m.media-amazon.com/images/I/81caWwaOOKL._AC_UF894,1000_QL80_.jpg" className='w-24' />
                    <div>

                      <p className='text-sm mb-1'>Number of Books: {el.books.length}</p>
                      {/* <p className='text-sm mb-1'>Current Borrowed: 1 </p> */}
                      <p className='text-sm mb-1'>Revenue Generated: Rs. {el.revenue}</p>
                      <div className='flex justify-center mt-2'>
                        <Link href={`/lending-dashboard/library/${el._id}`}>
                          <div className='bg-[#122042] w-20 h-8 flex items-center justify-center'>
                            <p className='text-white text-sm'>Configure</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
            
            {/* <div className=' w-80 '>
              <div className='mb-2'>
                <h1 className='font-semibold text-md'>Blossoms Books Store</h1>
                <p className=' font-light'>Hebbal, Bangalore</p>
              </div>
              <div className='flex items-center gap-2'>
                <img src="https://m.media-amazon.com/images/I/81caWwaOOKL._AC_UF894,1000_QL80_.jpg" className='w-24' />
                <div>

                  <p className='text-sm mb-1'>Number of Books: 3</p>
                  <p className='text-sm mb-1'>Current Borrowed: 1</p>
                  <p className='text-sm mb-1'>Revenue Generated: Rs. 300</p>
                  <div className='flex justify-center mt-2'>
                    <Link href={"/lending-dashboard/about-book"}>
                      <div className='bg-[#122042] w-20 h-8 flex items-center justify-center'>
                        <p className='text-white text-sm'>Configure</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className=' w-80 '>
              <div className='mb-2'>
                <h1 className='font-semibold text-md'>Blossoms Books Store</h1>
                <p className=' font-light'>Hebbal, Bangalore</p>
              </div>
              <div className='flex items-center gap-2'>
                <img src="https://m.media-amazon.com/images/I/81caWwaOOKL._AC_UF894,1000_QL80_.jpg" className='w-24' />
                <div>

                  <p className='text-sm mb-1'>Number of Books: 3</p>
                  <p className='text-sm mb-1'>Current Borrowed: 1</p>
                  <p className='text-sm mb-1'>Revenue Generated: Rs. 300</p>
                  <div className='flex justify-center mt-2'>
                    <Link href={"/lending-dashboard/about-book"}>
                      <div className='bg-[#122042] w-20 h-8 flex items-center justify-center'>
                        <p className='text-white text-sm'>Configure</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div> 
            <div className=' w-80 '>
              <div className='mb-2'>
                <h1 className='font-semibold text-md'>Blossoms Books Store</h1>
                <p className=' font-light'>Hebbal, Bangalore</p>
              </div>
              <div className='flex items-center gap-2'>
                <img src="https://m.media-amazon.com/images/I/81caWwaOOKL._AC_UF894,1000_QL80_.jpg" className='w-24' />
                <div>

                  <p className='text-sm mb-1'>Number of Books: 3</p>
                  <p className='text-sm mb-1'>Current Borrowed: 1</p>
                  <p className='text-sm mb-1'>Revenue Generated: Rs. 300</p>
                  <div className='flex justify-center mt-2'>
                    <Link href={"/lending-dashboard/about-book"}>
                      <div className='bg-[#122042] w-20 h-8 flex items-center justify-center'>
                        <p className='text-white text-sm'>Configure</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>*/}
          </div>
      </div>


    </div>
  )
}
          // <div className='h-[80vh] w-[100%] flex justify-center items-center'>
          //   {/* Insert illustration here */}
          //   <p className='font-medium'><span className='text-4xl  font-semibold'>Insert illustration <br />here.</span> To setup library.</p>
          // </div>

export default LendingDashBoard;
    // <div className='mt-28 md:mt-16 px-10 w-[80%]'>
    //   {/* Header */}
    //   <div className="explore_text text-3xl font-semibold">
    //       <h2 className='text-[#002379]'>LendingDashBoard</h2>
    //   </div>

    //   {/* Body */}
      // <div className=' h-[80%] w-full flex justify-center items-center'>
      //     {/* Insert illustration here */}
      //     <div className=''>
      //       <p className='font-medium'><span className='text-4xl  font-semibold'>Insert illustration <br />here.</span> To setup library.</p>
      //     </div>
      // </div>
    // </div>