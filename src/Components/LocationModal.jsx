import React, { useEffect, useState } from 'react'
import useUserLocation from "@/Hooks/useUserLocation"
import useAxiosPrivate from '@/Hooks/useAxiosPrivate'

const LocationModal = ({toggleShowLocationModal}) => {
  const axiosPrivate = useAxiosPrivate();
  const {userLocation, setUserLocation} = useUserLocation()
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [locationType, setLocationnType] = useState(userLocation ? "user-location" : "current-location")
  
  const assignCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude)
      // setUserLocation({latitude: position.coords.latitude, longitude:position.coords.longitude})
    });
  }

  useEffect(()=>{
    if(locationType === "user-location"){
      setLatitude(userLocation.latitude)
      setLongitude(userLocation.longitude)
    }else{
      assignCurrentLocation()
    }
  }, [locationType])

  const handleUpdateLocation = (e) => {
    e.preventDefault();
    console.log({latitude, longitude})
    axiosPrivate.post("/user/update-loc", {
      latitude, longitude
    }).then(res=>{
      console.log(res.data);
      if(res.data.success){
        setUserLocation({latitude, longitude})
        toggleShowLocationModal()
      }
    }).catch(e=>{
      console.error("Error while updating the current location:", e)
    })
  }

  return (
    <div className=' fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center'>
        <div className='w-[400px] bg-white p-5 rounded-2xl'>
      <div className='pb-2 px-2'>
        <div>
          <h1 className=' text-center pb-4 text-[#002379] text-3xl font-semibold'>Zipper</h1>
        </div>
        <p className='text-xs'>Note: Our app will make use of your location to provide you books that are available near you. You could also manually give location from where you would like to borrow books.</p>  
      </div>
      <div className='flex justify-center'>
        <input type="radio" name="location-type" checked={locationType === "user-location"} onChange={(e)=>{setLocationnType("user-location")}}/> <span className='text-xs mr-4'>Previously Used Location</span>
        <input type="radio" name="location-type" checked={locationType === "current-location"} onChange={(e)=>{setLocationnType("current-location")}}/> <span className='text-xs'>Current Location</span>
      </div>
      <div className='flex justify-center'>

            <div className='flex flex-col p-2'>
              <label htmlFor="latitude">Latitude</label>
              <input className='w-44 border rounded-sm h-8  border-black px-2' defaultValue={latitude} onChange={(e)=>setLatitude(e.target.value)} type="number" id="latitude" />
            </div >
      </div>
      <div className='flex justify-center'>

            <div className="flex flex-col p-2">
              <label htmlFor="longitude">Longitude</label>
              <input type="number" className='w-44 border rounded-sm h-8 border-black px-2' defaultValue={longitude} onChange={e=>setLongitude(e.target.value)} id="longitude" />
            </div>
      </div>
            <div className='p-2 pt-4 flex justify-center'>
              <button onClick={handleUpdateLocation} className='border border-black p-1 px-2 bg-[#002279d2] text-white hover:bg-white hover:text-black'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default LocationModal