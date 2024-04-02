"use client";
import React, { useEffect, useState } from "react";
import "./bookdetail.css";
import NavbarSignin from "../../navbarSignin/page";
import Review from "../../Review/page";
import useAxiosPrivate from "@/Hooks/useAxiosPrivate";
import Link from 'next/link'
import NotificationBell from '@/Components/NotificationBell/NotificationBell';
import useProtectedRoutes from "@/Hooks/useProtectedRoutes";
import useAuth from "@/Hooks/useAuth";
import { useRouter } from "next/navigation";

const BookDetails = ({params}) => {
  const [book, setBook] = useState({});
  const [allowRequestBorrow, setAllowRequestBorrow] = useState(true);
  const axiosPrivate =useAxiosPrivate()
  const protectRoute = useProtectedRoutes();
  const {auth} = useAuth()
  const { push } = useRouter();
  let libraryPath = ""
  libraryPath = process.env.NEXT_PUBLIC_Library_Prod_URL

  useEffect(()=>{
    axiosPrivate.get(libraryPath+`/book/borrower/${params.id}`).then(res=>{
      if(res.data.success){
        setBook(res.data.data);
        if(res.data.data?.owner == auth.uid){
          setAllowRequestBorrow(false)
        }else{
          for (let i = 0; i < res.data.data.borrowRequest.length; i++) {
            if(res.data.data.borrowRequest[i]?.user == auth.uid){
              setAllowRequestBorrow(false)
            }
          } 
        }
      }
    })
  }, [auth])
  
  useEffect(()=>{
    async function check(){
      const result = await protectRoute()
      if(!result) push("/auth/login") 
      }
    check()
  }, [])

  const HandleRequestBorrow = (e) =>{
    e.preventDefault();
    axiosPrivate.post(libraryPath+"/book/request-borrow", {
      book_id: params.id,
      timestamp: Date.now()
    }).then(res =>{
      if(res.data.success){
        setAllowRequestBorrow(false)
        alert("successfully request")
      }else if(res.data.error == "Already Request"){
        alert("Already Requested")
      }else{
        alert("Request Failed. Try again after sometime.")
      }
    })
  }
  return (
    <div className="details_and_pic overflow-hidden mb-10">
      <NavbarSignin />
      <div className='flex justify-end mt-10 px-10 h-9 items-center '>
        <NotificationBell />
      </div>
      <div className="bookdetails  mb-2 mx-16">
        <div className="row_details gap-20">
          <div className=" flex flex-col items-center ">
            <img
              src={book?.photos ? book.photos[0] : ""}
              id="bookimg"
              className="w-64 h-96"
              alt=""
            />
            {/* <div className="small_imgs_row">
              <div className="small_imgs_col">
                <img
                  src="https://5.imimg.com/data5/JU/IE/TE/SELLER-47422800/holistic-health-books-ikigai-the-japanese-secret-to-a-long-and-happy-life-500x500.jpg"
                  style={{ width: "100%" }}
                  className="small_img"
                  alt=""
                />
              </div>
              <div className="small_imgs_col">
                <img
                  src="https://5.imimg.com/data5/JU/IE/TE/SELLER-47422800/holistic-health-books-ikigai-the-japanese-secret-to-a-long-and-happy-life-500x500.jpg"
                  style={{ width: "100%" }}
                  className="small_img"
                  alt=""
                />
              </div>
              <div className="small_imgs_col">
                <img
                  src="https://5.imimg.com/data5/JU/IE/TE/SELLER-47422800/holistic-health-books-ikigai-the-japanese-secret-to-a-long-and-happy-life-500x500.jpg"
                  style={{ width: "100%" }}
                  className="small_img"
                  alt=""
                />
              </div>
            </div> */}
          </div>
          <div className=" w-[70%] ">
            <div className="my-2">
              <h1 className="text-4xl font-bold mb-1">{book && book.name}</h1>
              <h4 className="font-medium">Book by {book.author}</h4>
            </div>
            <div className="flex flex-col gap-1 font-medium my-5">
              <h1>Library: <Link href={`/library/${book?.library?._id}`} className="underline">{book?.library?.name}.</Link></h1>
              <h5>Number of times Borrowed: {book?.previousOwners?.length}</h5>
              <h4>Price: Rs.{book?.priceOfBorrowing}/week</h4>
              <h4>Deposite Required: Rs.{book?.mrp} [Refunded after return]</h4>
            </div>

            <div className="mt-10">
              <button onClick={HandleRequestBorrow} className={`${allowRequestBorrow?"bg-[#122042]":"bg-[#000000] cursor-default"} text-white px-4 py-3`}>{allowRequestBorrow?"Request borrow":"Requested"}</button>
            </div>
            <br />
          </div>
        </div>
        <div className="font-medium  mt-12">

            <p>
              {book?.about}
            </p>
        </div>
      </div>
      {book && book.reviews?.length (
        <div className="reviews_all noScollbar px-16 flex  gap-10  overflow-scroll [&>div]:flex-shrink-0 pb-10">
          {book.reviews.map((el, i)=>(
            <Review key={i} userId={el.userID} userName={el.userName} rating={el.rating} review={el.review} />
          ))}
        </div>
        )}
        <div className="px-16 reviews_all noScollbar flex  gap-10  overflow-scroll [&>div]:flex-shrink-0 pb-10">
          
            <Review userId={"123"} userName={"Mo"} rating={"5"} review={"The best Library, Got all the books I need"} />
          
        </div>
    </div>
  );
};

export default BookDetails;
