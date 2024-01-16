"use client"
import React, { useEffect } from 'react'
import { CiCirclePlus } from "react-icons/ci";

const ImageUpload = ({file, setFile,name, setPreview}) => {
    useEffect(()=>{
        if (!file) {
            setFile(null)
            return
        }

        const objectUrl = URL.createObjectURL(file)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [file])

    const handleSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setFile(null)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        console.log("Front")
        setFile(e.target.files[0])
    }
  return (
    <div>
        <label htmlFor={name} className="">
            <div className=" flex items-center gap-3">
                <span className=' font-medium w-28'>{name} Photo</span>
                <CiCirclePlus className=' cursor-pointer' size={22} />
                <input
                    id={name}
                    type="file"
                    accept="image/x-png, image/jpeg"
                    onChange={handleSelectFile}
                    className='hidden'
                />
            </div>
        </label>
    </div>
  )
}

export default ImageUpload