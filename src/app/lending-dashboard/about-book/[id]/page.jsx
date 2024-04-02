"use client"
import axios, { axiosPrivate } from '@/Axios/axios'
import React, { useEffect, useState } from 'react'

const AboutBook = ({params}) => {
    const [book, setBook] = useState({})
    const [bookRequests, setBookRequests] = useState([])
    const [disableIssue, setDisableIssue] = useState(false);
    const [isIssued, setIsIssued] = useState(false);
    const [isBorrowed, setIsBorrowed] = useState(false);
    const [recepient, setRecipient] = useState()
    let libraryPath = ""
    libraryPath = process.env.NEXT_PUBLIC_Library_Prod_URL

    useEffect(()=>{
        axios.get(libraryPath+`/book/${params.id}`).then(res=>{
            if(res.data.success){
                setBook(res.data.data);
                setBookRequests(res.data.data.borrowRequest)
                if (res.data.data.isIssued){
                    setDisableIssue(true)
                    setRecipient(res.data.data.issuesTo)
                    setIsIssued(true)
                }else{
                    setDisableIssue(false)
                }
                if(res.data.data.isBorrowed){
                    setIsBorrowed(true);
                    setRecipient(res.data.data.lendTo)
                }
            }
        }).catch(e=>{
            console.log("Error while getting book details", e);
        })
    }, [])

    const getDate = (timestamp) =>{
        let d = new Date(timestamp * 1000);
        const date =  d.getDate() + '/' + (d.getMonth()) + '/' + d.getFullYear() + " " + d.getHours() + ':' + d.getMinutes();
        return date;
    }

    const handleIssue=(requestID, user)=>{
        if(!requestID || !user || disableIssue)return;
        axiosPrivate.post(libraryPath+"/book/issue-book", {
            requestID, issuedTo: user, bookID:book._id
        }).then(res=>{
            if(!res.data.success) alert(res.data.error)
            let requests = bookRequests;
            requests = requests.filter((el)=>el._id !== requestID)
            setBookRequests(requests)
            setDisableIssue(true)
        }).catch(e=>{console.log(e);alert(e.response.data.error)})
    }
  return (
    <div className="h-full">
        <div className="explore_text text-2xl mb-4 font-semibold">
              <h2>{book?.name}</h2>
        </div>


        <main className=''>
            <div className='flex mb-8'>
                {/* left */}
                <div className='mr-4 w-[20%]'>
                    <img className=" w-44 h-64 my-3"  src={book?.photos?.length>0 ? book.photos[0] : "https://m.media-amazon.com/images/I/710iakVqBcL._AC_UF1000,1000_QL80_.jpg"} alt="" />
                </div>
                {/* Right */}
                <div className='flex flex-col gap-4 w-[75%]'>
                    <div>
                        <p ><span className='font-medium'>Rate/week:</span> Rs:{book?.priceOfBorrowing}</p>
                    </div>
                    <div>
                        <p ><span className='font-medium'>Price/week:</span> Rs:{book?.mrp}</p>
                    </div>
                    <div>
                        <p><span className='font-medium'>About the Book:</span> {book?.about}</p>
                    </div>
                    <div>
                        <p><span className='font-medium'>Revenue Generated:</span> Rs:200</p>
                    </div>
                    <div>
                        <p><span className='font-medium'>Status:</span> {isIssued ? "Issued" : isBorrowed ? "Borrowered" : "No activity"}</p>
                    </div>
                    {/* {(isIssued || isBorrowed) && <div>
                        <p><span className='font-medium'>{isIssued ? "Issued To" : "Lend To"}</span> {recepient}</p>
                    </div>} */}
                </div>
            </div>

            <div className='my-4'>
                <div className="explore_text text-xl  font-semibold">
                    <h2>Requests</h2>
                </div>
                <div className=' noScollbar px-4 pb-4 flex  gap-10  overflow-scroll [&>div]:flex-shrink-0 '>
                    {bookRequests?.length > 0 && bookRequests.map((el,i)=>(
                        <div key={i}  className='w-56  p-2  shadow-slate-300 shadow-lg rounded-xl'>
                            <div className='flex my-2 items-center'>
                                <div className='w-[30%] '>
                                    <img className=' rounded-full w-12 h-12' src="https://media1.popsugar-assets.com/files/thumbor/FGmHADvCrzNB5SRhW7iDHW4yz3E/0x24:2000x2024/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/05/13/045/n/1922398/e8decc595ebc8b217b9262.72649682_/i/Elizabeth-Olsen.jpg" alt="" />
                                </div>
                                <div className=' w-[65%]'>
                                    <p className='text-lg font-semibold'>{el.name}</p>
                                </div>
                            </div>
                            <div className='my-2'>
                                <p className='mb-1 text-sm'> Request on: {getDate(el.timestamp)}</p>
                                {/* <p className='mb-1 text-sm'> Number of Books Borrowed: 4</p> */}
                            </div>
                            <div className='my-2 flex justify-center'>
                                <button onClick={(e)=>{e.preventDefault(); handleIssue(el._id, el.user)}} className={`px-4 py-1 ${disableIssue ? "bg-[#1e2127] cursor-default":"bg-[#122042]"} text-white `}>Issue</button>
                            </div>
                        </div>
                    )
                    )}
                </div>
            </div>
            
            <div className='my-4' >
                <div className="explore_text text-xl  font-semibold">
                    <h2>Issued</h2>
                </div>
                <div className=' noScollbar px-4 pb-4 flex  gap-10  overflow-scroll [&>div]:flex-shrink-0 '>
                    {bookRequests?.length > 0 && bookRequests.map((el,i)=>{
                        if(el.state === "issued"){
                            return (
                                <div key={i}  className='w-56  p-2  shadow-slate-300 shadow-lg rounded-xl'>
                            <div className='flex my-2 items-center'>
                                <div className='w-[30%] '>
                                    <img className=' rounded-full w-12 h-12' src="https://media1.popsugar-assets.com/files/thumbor/FGmHADvCrzNB5SRhW7iDHW4yz3E/0x24:2000x2024/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/05/13/045/n/1922398/e8decc595ebc8b217b9262.72649682_/i/Elizabeth-Olsen.jpg" alt="" />
                                </div>
                                <div className=' w-[65%]'>
                                    <p className='text-lg font-semibold'>{el.name}</p>
                                </div>
                            </div>
                            <div className='my-2'>
                                <p className='mb-1 text-sm'> Request on: {getDate(el.timestamp)}</p>
                                {/* <p className='mb-1 text-sm'> Number of Books Borrowed: 4</p> */}
                            </div>
                        </div>
                            )
                        }
                    })}
                </div>
            </div>


        </main>
    </div>
  )
}

export default AboutBook