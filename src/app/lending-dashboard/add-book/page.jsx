"use client"
import React, { useEffect, useState } from 'react'
import useAxiosPrivate from '@/Hooks/useAxiosPrivate';
import useUserLibraries from '@/Hooks/useLibraries';
import ImageUpload from './ImageUpload';
import axios from '@/Axios/axios';
import { useRouter } from 'next/navigation';

const AddBook = () => {
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [priceOfBorrowing, setPriceOfBorrowing] = useState(0);
    const [mrp, setMrp] = useState(0)
    const [location, setLocation] = useState();
    const [libID, setLibID] = useState("");
    const [about, setAbout] = useState("");
    const {libraries} = useUserLibraries();
    const [frontimgFile, setFrontimgFile] = useState(null)
    const [backimgFile, setBackimgFile] = useState(null)
    const [firstPageimgFile, setFirstPageimgFile] = useState(null)
    const [frontimgPreview, setFrontimgPreview] = useState(null)
    const [backimgPreview, setBackimgPreview] = useState(null)
    const [firstPageimgPreview, setFirstPageimgPreview] = useState(null)

    const axiosPrivate = useAxiosPrivate()
    const { push } = useRouter();

    const sendAddBookRequest = (e)=>{
        e.preventDefault();
        if(name=="" || libID=="" || author == "" || about == "" || !firstPageimgFile || !frontimgFile || !backimgFile){
            alert("Enter all Fields");
            return;
        } 
        const data = new FormData();
        data.append("firstPage", firstPageimgFile);
        data.append("front", frontimgFile);
        data.append("back", backimgFile);
        const mainData = {name, author, mrp, priceOfBorrowing, location, about}
        data.append("data", JSON.stringify(mainData))

        axiosPrivate.post(`/book/book/add/${libID}`, data, {headers: { 'Content-Type': 'multipart/form-data' }}).then(res=>{
            console.log(res.data);
            if(res.data.success) {
                alert("successfully added")
                push(`/lending-dashboard/library/${libID}`)
            }else{
                alert("couldn't upload, server-error")
            }
        }).catch(e=>{
            console.warn("Error while adding a book")
        })
    }

  return (
    <div className="h-full">
        <div className="explore_text text-2xl mb-8 font-semibold">
              <h2>Add Book</h2>
        </div>

        <form className='flex flex-col gap-4 '>
            <div className='flex gap-6'>
                <div className='w-1/3 flex flex-col gap-4'>
                    <div>
                        <div>
                            <p className=' font-semibold'>Name of the Book</p>
                        </div>
                        <input value={name} onChange={e=>setName(e.target.value)} className='w-72 h-8 border border-slate-400' type="text" />
                    </div>
                    <div>
                        <div>
                            <p className=' font-semibold'>Name of the Author</p>
                        </div>
                        <input className='w-72 h-8 border border-slate-400' value={author} onChange={e=>setAuthor(e.target.value)} type="text" />
                    </div>
                    <div>
                        <div>
                            <p className=' font-semibold'>Choose Library</p>
                        </div>
                        <select className='w-72 h-8 border border-slate-400' onChange={e=>{
                            setLibID(e.target.value);
                            libraries.forEach(el => {
                                if(el._id == e.target.value){
                                    const loc = {coordinates: el.location.coordinates, type: el.location.type}
                                    console.log(el, loc);
                                    setLocation(loc)
                                    return;
                                }
                            });
                            }}
                            >
                                <option value="">Choose</option>
                            {libraries.length > 0 && libraries.map((el, i)=>(
                                <option key={i} value={el._id}>{el.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <div>
                            <p className=' font-semibold'>Add Photos</p>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <ImageUpload file={frontimgFile}  name={"Front"} setFile={setFrontimgFile} setPreview={setFrontimgPreview} />
                            <ImageUpload file={backimgFile} name={"Back"} setFile={setBackimgFile} setPreview={setBackimgPreview} />
                            <ImageUpload file={firstPageimgFile} name={"First"} setFile={setFirstPageimgFile} setPreview={setFirstPageimgPreview} />
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap justify-center w-2/3  gap-10'>
                    <img className='max-h-64 w-44' src={frontimgPreview ? frontimgPreview : ""} alt="" />
                    <img className='max-h-64 w-44' src={backimgPreview ? backimgPreview : ""} alt="" />
                    <img className='max-h-64 w-44' src={firstPageimgPreview ? firstPageimgPreview: ""} alt="" />
                
                </div>
            </div>
            
            <div className='w-full '>
                <div>
                    <p className=' font-semibold'>About the book</p>
                </div>
                <textarea rows={40} cols={120} value={about} onChange={e=>setAbout(e.target.value)} className='text-sm p-1 h-20 border border-slate-400' type="text"></textarea>
            </div>
            <div className='w-full flex gap-10'>
                <div>
                    <div>
                        <p className=' font-semibold'>Price of the Book</p>
                    </div>
                    <input value={mrp} onChange={e=>setMrp(e.target.value)}className='w-72 h-8 border border-slate-400' type="number" />
                </div>
                <div>
                    <div>
                        <p className=' font-semibold'>Rate of Borrowing per week</p>
                    </div>
                    <input value={priceOfBorrowing} onChange={e=>setPriceOfBorrowing(e.target.value)} className='w-72 h-8 border border-slate-400' type="text" />
                </div>
            </div>

            <button onClick={sendAddBookRequest} className='bg-[#122042] w-32 h-12 text-white font-medium'>Add</button>
        </form>
    </div>
  )
}

export default AddBook