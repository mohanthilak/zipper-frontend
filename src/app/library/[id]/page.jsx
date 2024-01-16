"use client"
import useAxiosPrivate from '@/Hooks/useAxiosPrivate';
import NavbarSignin from '@/app/navbarSignin/page';
import React, { useEffect, useState } from 'react'
import "./library.css"
import NotificationBell from '@/Components/NotificationBell/NotificationBell';
import Review from '@/app/Review/page'
import Link from 'next/link';
import useProtectedRoutes from '@/Hooks/useProtectedRoutes';
import useAuth from '@/Hooks/useAuth';
const page = ({params}) => {
    const [library, setLibrary] = useState();
    const axiosPrivate = useAxiosPrivate();
    const protectRoute = useProtectedRoutes();
    const {auth} = useAuth()
    
    
    useEffect(()=>{
      async function check(){
        const result = await protectRoute()
        if(!result) push("/auth/login")
        else console.log(auth)
      }
      check()
    }, [])
    useEffect(()=>{
        axiosPrivate.get(`/library/library/find/${params.id}`).then(res=>{
            console.log(res.data)
            if(res.data.success){
                setLibrary(res.data.data);
            }
        })
    }, [])

  return (
    <div className="details_and_pic overflow-hidden mb-10">
      <NavbarSignin />
      <div className='flex justify-end mt-10 px-10 h-9 items-center'>
        <NotificationBell />
      </div>
      <div className="bookdetails mb-2 mx-16">
        <div className="row_details gap-20">
          <div className=" flex flex-col items-center ">
            <img
              src={library?.books?.length > 0 ? library.books[0].photos[0]  : "https://m.media-amazon.com/images/I/71t4GuxLCuL._AC_UF1000,1000_QL80_.jpg"}
              id="bookimg"
              className="w-64 h-96"
              alt=""
            />
          </div>
          <div className=" w-[70%] ">
            <div className="my-2">
              <h1 className="text-4xl font-bold mb-1">{ library?.name}</h1>
              {/* <h4 className="font-medium">Book by {book.author}</h4> */}
            </div>
            <div className="flex flex-col gap-1 font-medium my-5">
              <div>
                  <p><span className='font-medium'>About:</span> {library?.about}</p>
              </div>
              <div>
                  <p ><span className='font-medium'>Latitude :{library && library?.location?.coordinates[0]}</span> </p>
              </div>
              <div>
                  <p ><span className='font-medium'>Longitude :</span> {library?.location?.coordinates[1]}</p>
              </div>
              <div>
                  <p><span className='font-medium'>Addres:</span> {library?.address}</p>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
      {/* {book && book.reviews?.length (
        <div className="reviews_all noScollbar px-4 flex  gap-10  overflow-scroll [&>div]:flex-shrink-0 pb-10">
          {book.reviews.map((el, i)=>(
            <Review userId={el.userID} userName={el.userName} rating={el.rating} review={el.review} />
          ))}
        </div>
        )} */}

      {library?.books?.length>0 && (
        <div className='mx-16'>
            <div className='mb-4'>
              <h1 className='font-semibold text-xl'>Books</h1>
            </div>
            <div className=' noScollbar flex gap-10 pb-12 overflow-scroll [&>div]:flex-shrink-0'>
              { library?.books?.map((el, i)=>(
                <Link href={`/bookdetail/${el._id}`} key={i}>
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
    </div>
  )
}

export default page