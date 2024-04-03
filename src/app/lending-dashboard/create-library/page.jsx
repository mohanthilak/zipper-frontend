'use client'
import useAxiosPrivate from '@/Hooks/useAxiosPrivate';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

const CreateLibrary = () => {
    const [name, setName] = useState("");
    const [aboutLibrary, setAboutLibrary] = useState("");
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLogitude] = useState(0);
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [address, setAddress] = useState("");

    const axiosPrivate = useAxiosPrivate();
    const { push } = useRouter();
    
    let libraryPath = ""
    libraryPath = process.env.NEXT_PUBLIC_Library_Prod_URL


    const SendCreateLibraryRequest = (e) =>{
        e.preventDefault();
        if(name=="" || latitude == 0 || longitude == 0 || city =="" || state == "" || address == "") {
            alert("Please Enter All the Fields.");
            return;
        };

        axiosPrivate.post(libraryPath+"/library/create", {
            location:{type: "Point", coordinates: [latitude, longitude]},
            name, city, state, about: aboutLibrary, address
        }).then(res=>{
            if(res.data.success){
                // push('/lending-dashboard');
            }
        }).catch(e=>{
            console.log("Error While Creating a Library", e)
        })
    }
  return (
    <div className=' h-full'>
         <div className="explore_text text-2xl mb-8 font-semibold">
              <h2>Create Library</h2>
        </div>

        <form className='flex flex-col gap-4 '>
            <div>
                <div>
                    <p className=' font-semibold'>Name</p>
                </div>
                <input value={name} onChange={e=>setName(e.target.value)} className='w-72 h-8 border border-slate-400' type="text" />
            </div>
            <div className='w-full '>
                <div>
                    <p className=' font-semibold'>About Library</p>
                </div>
                <textarea value={aboutLibrary} onChange={e=> setAboutLibrary(e.target.value)} cols={120} className='text-sm h-20 p-1 border border-slate-400' type="text"></textarea>
            </div>
            <div className='w-full flex gap-10'>
                <div>
                    <div>
                        <p className=' font-semibold'>Latitude</p>
                    </div>
                    <input value={latitude} onChange={e=>setLatitude(e.target.value)} className='w-72 h-8 border border-slate-400' type="text" />
                </div>
                <div>
                    <div>
                        <p className=' font-semibold'>Logitude</p>
                    </div>
                    <input value={longitude} onChange={e=>setLogitude(e.target.value)} className='w-72 h-8 border border-slate-400' type="text" />
                </div>
            </div>
            <div className='w-full flex gap-10'>
                <div>
                    <div>
                        <p className=' font-semibold'>City</p>
                    </div>
                    <input value={city} onChange={e=>setCity(e.target.value)} className='w-72 h-8 border border-slate-400' type="text" />
                </div>
                <div>
                    <div>
                        <p className=' font-semibold'>State</p>
                    </div>
                    <input value={state} onChange={e=>setState(e.target.value)} className='w-72 h-8 border border-slate-400' type="text" />
                </div>
            </div>
            <div className='w-full '>
                <div>
                    <p className=' font-semibold'>Address</p>
                </div>
                <textarea value={address} onChange={e=>setAddress(e.target.value)} rows={40} cols={120} className='text-sm p-1 h-20 border border-slate-400' type="text"></textarea>
            </div>

            <button onClick={SendCreateLibraryRequest} className='bg-[#122042] w-32 h-12 text-white font-medium'>Create</button>
        </form>
    </div>
  )
}

export default CreateLibrary