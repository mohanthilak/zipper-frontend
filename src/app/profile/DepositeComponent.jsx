"use client"
import useAuth from '@/Hooks/useAuth'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import useAxiosPrivate from '@/Hooks/useAxiosPrivate'

const DepositeComponent = () => {
  const[deposit, setDeposit] = useState(0)

  const {auth} = useAuth()
  const axiosPrivate = useAxiosPrivate()
  
  
  useEffect(()=>{
    axiosPrivate.get(`/user/wallet/${auth?.uid}`).then(res=>{
      if(res.data.success){
        setDeposit(res.data.data.amount);
      }
    })
  }, [auth])

  const onADDMoney = (e)=>{
    e.preventDefault();
    if(auth?.uid){
      axiosPrivate.post("/user/wallet/add-money", {
          "amount": 500, 
        }).then(res=>{
          if(res.data.success){
            const rzp1 = new Razorpay({
              "key": process.env.NEXT_PUBLIC_Razorpay_API_Key, // Enter the Key ID generated from the Dashboard
              "amount": "4000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
              "currency": "INR",
              "name": "Zipper", //your business name
              "description": "Test Transaction",
              "image": "https://static.wikia.nocookie.net/naruto/images/d/d6/Naruto_Part_I.png/revision/latest/scale-to-width-down/1200?cb=20210223094656",
              "order_id": res.data.data.paymentsData.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
              "handler": function (response){
                  alert(response.razorpay_payment_id);
                  alert(response.razorpay_order_id);
                  alert(response.razorpay_signature);
                  axiosPrivate.post("/user/wallet/deposit-success", {
                    payment_id: response.razorpay_payment_id,
                    order_id: response.razorpay_order_id,
                    signature: response.razorpay_signature,
                    transactionID: res.data.data.repoData._id
                  }).then(res=>{
                    if(res.data.success){
                      setDeposit(res.data.data.amount);
                    }
                  })
              },
              "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
                  "name": "Gaurav Kumar", //your customer's name
                  "email": "gaurav.kumar@example.com", 
                  "contact": "9000090000"  //Provide the customer's phone number for better conversion rates 
              },
              "notes": {
                  "address": "Razorpay Corporate Office"
              },
              "theme": {
                  "color": "#3399cc"
              }
          });
          rzp1.on('payment.failed', function (response){
                  alert(response.error.code);
                  alert(response.error.description);
                  alert(response.error.source);
                  alert(response.error.step);
                  alert(response.error.reason);
                  alert(response.error.metadata.order_id);
                  alert(response.error.metadata.payment_id);
                  console.log("Razorpay Error: ", response.error)
          });
          rzp1.open();
          }
        })
    }
  }
  return (
    <>
    <Head>
      <script src='https://checkout.razorpay.com/v1/checkout.js'></script>
    </Head>
    <div className='shadow-2xl rounded-3xl h-[310px] w-72 md:w-1/4 p-5 flex flex-col justify-between'>
        <div className=''>
            <h1 className='font-bold text-2xl underline'>Your Deposite</h1>
        </div>
        <div className='flex justify-center'>
            <h1 className='font-bold text-3xl '>Rs. {deposit}/-</h1>
        </div>
        <div className='flex justify-between'>
            <Link href={"#"} className='font-semibold text-lg' onClick={onADDMoney} >Add +</Link>
            <Link href={"#"} className='font-semibold text-lg' >Withdraw -</Link>
        </div>
    </div>
    </>
  )
}

export default DepositeComponent