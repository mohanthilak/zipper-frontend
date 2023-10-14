"use client";
import React, { useEffect } from "react";
import "./bookdetail.css";
import NavbarSignin from "../navbarSignin/page";
import Review from "../Review/page";
import { io } from "socket.io-client";

const BookDetails = () => {
  // useEffect(()=>{
  //   // const socket = io("http://localhost:8000/");
  //   socket.on("connect", (data)=>{
  //     console.log(data)
  //   })
  // }, [])
  return (
    <div className="details_and_pic overflow-hidden mb-10">
      <NavbarSignin />
      <div className="bookdetails  my-16 mx-16">
        <div className="row_details gap-20">
          <div className=" flex flex-col items-center ">
            <img
              src="https://5.imimg.com/data5/JU/IE/TE/SELLER-47422800/holistic-health-books-ikigai-the-japanese-secret-to-a-long-and-happy-life-500x500.jpg"
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
              <h1 className="text-4xl font-bold mb-1">Ikigai</h1>
              <h4 className="font-medium">Book by Francesc Miralles and Hector Garcia</h4>
            </div>
            <div className="flex flex-col gap-1 font-medium my-5">
              <h1>Library: Budding Trees.</h1>
              <h5>Number of times Borrowed: 4</h5>
              <h4>Price: Rs.20/week</h4>
            </div>

            <div className="mt-10">
              <button className="bg-[#122042] text-white px-4 py-3">Request borrow</button>
            </div>
            <br />
          </div>
        </div>
        <div className="font-medium  mt-12">

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Mollitia est voluptas quos eligendi assumenda unde ipsam eaque
              tempore. Inventore ab libero, ratione expedita nam dignissimos
              in natus deserunt vitae ullam? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eligendi a commodi, rem enim
              minima maiores totam, deleniti quod, ipsum aliquid blanditiis
              inventore quasi! Aliquid ipsam voluptate quia non. Ipsum, iste.
            </p>
        </div>
      </div>
      <div className="reviews_all noScollbar px-4 flex  gap-10  overflow-scroll [&>div]:flex-shrink-0 pb-10">
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  );
};

export default BookDetails;
