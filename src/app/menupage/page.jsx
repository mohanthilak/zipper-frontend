'use client'
import {useEffect, useRef, useState} from 'react'
import './Menupage.css'
import NavbarSignin from '../navbarSignin/page'
import {AiOutlineBell, AiOutlineLeft, AiOutlineRight} from "react-icons/ai"
import useProtectedRoutes from '@/Hooks/useProtectedRoutes'
import { useRouter } from 'next/navigation';

import Link from 'next/link'
import useAuth from '@/Hooks/useAuth'
import LocationModal from '@/Components/LocationModal'
import useUserLocation from '@/Hooks/useUserLocation'
import PageHeading from '@/Components/PageHeading'
import NotificationBell from '@/Components/NotificationBell/NotificationBell'
import useAxiosPrivate from '@/Hooks/useAxiosPrivate'

const Menupage = () => {
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [nearYouBooks, setNearYouBooks] = useState([])
  const [searchedBooks, setSearchedBooks] = useState([])
  const [searchBooksText, setSearchBooksText] = useState("");
  const [librariesNearYou, setLibrariesNearYou] = useState([]);
  const [displayedBooks, setDisplayedBooks] = useState([]);
  const [displayedLibraries, setDisplayedLibraries] = useState([]);
  
  const { push } = useRouter();
  
  const {userLocation} = useUserLocation();
  const {auth} = useAuth()
  const protectRoute = useProtectedRoutes();



  const axiosPrivate = useAxiosPrivate()

  const toggleShowLocationModal = () => {
    setShowLocationModal(e=>!e);
  }

  useEffect(()=>{
    if(auth.accessToken){
      if(userLocation?.latitude){
        setShowLocationModal(false);
        axiosPrivate.get(`/book/book/menupage/${userLocation.longitude}/${userLocation.latitude}`).then(res=>{
          console.log("!!!!!!", res.data);
          if(res.data.success){
            console.log("!!@@!@!@", res.data.data)
            setNearYouBooks([...res.data.data])
            setDisplayedBooks([...res.data.data])
          }else{
            console.log("***")
          }
        }).catch(e=>[
          console.log(e)
        ])

        axiosPrivate.get(`/library/library/find/${userLocation.latitude}/${userLocation.longitude}`).then(res=>{
          console.log("\n\n\nLibraries:", res.data, "\n\n\n")
          if(res.data.success){
            console.log("!!!!!!!!!!!!!!!!!!1")
            setLibrariesNearYou(res.data.data);
            setDisplayedLibraries(res.data.data)
          }else{
            console.log("error while fetching libraries near you")
          }
        })
      }else{
        setShowLocationModal(true)
      }
    }
  }, [userLocation])

  useEffect(()=>{
    if(searchBooksText.length > 0) {
      axiosPrivate.get(`/book/book/search/${searchBooksText}/${userLocation.latitude}/${userLocation.longitude}`).then(res=>{
        console.log("search Results:", res.data)
        if(res.data.success){
          setDisplayedBooks(res.data.data.books);
          setDisplayedLibraries(res.data.data.libraries)
        }else{
          setDisplayedBooks([])
          setDisplayedLibraries([])
        }
      })
    }else{
      setDisplayedBooks(nearYouBooks)
      setDisplayedLibraries(librariesNearYou)
    }
  }, [searchBooksText])


  const CalculateDistance = (lat1, lon1, lat2, lon2) => {
    if ((lat1 == lat2) && (lon1 == lon2)) {
      return 0;
    }
    else {
      var radlat1 = Math.PI * lat1/180;
      var radlat2 = Math.PI * lat2/180;
      var theta = lon1-lon2;
      var radtheta = Math.PI * theta/180;
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180/Math.PI;
      dist = dist * 60 * 1.1515;
      dist = dist * 1.609344;
      return dist.toFixed(2);
    }
  }

  
  useEffect(()=>{
    async function check(){
      const result = await protectRoute()
      if(!result) push("/auth/login")
      else console.log(auth)
    }
    check()
  }, [])
  

  const nearYouRef = useRef();
  const LibrariesRef = useRef();
  const searchedBooksRef = useRef();

  const ScrollListWithRefAndOffset = (reff, scrollOffset) => {
    reff.current.scrollLeft += scrollOffset; 
  }

  

  return (
    <div className='menupage  px-2 md:px-10 w-[100%] md:w-[80%] overflow-hidden' id='allBooks'>
       
      <div className='mt-28 md:mt-8'>
        {showLocationModal ? <LocationModal toggleShowLocationModal={toggleShowLocationModal}  />:""}
          
        
        <div className='mb-12 flex justify-between items-center py-2'>
          <PageHeading title={"Explore"}/>
          <div className='flex items-center justify-between gap-5'>
            <div>
                <input style={{"boxShadow": "0 1px 10px 0 #808080", "outline": "none"}} onChange={e=>setSearchBooksText(e.target.value)} className=' shadow-lg h-9 w-44 md:w-64  p-2 rounded-2xl' type="text" placeholder=" Search"  />
            </div>
            <NotificationBell />
          </div>
        </div>
        <div className='my-8'>
          <div className='flex justify-between'>
            <div className="explore_text text-2xl font-semibold mb-1">
              <h2>Books Near You</h2>
            </div>
            <div className='flex gap-5 pr-5'>
                <AiOutlineLeft onClick={() => ScrollListWithRefAndOffset(nearYouRef,-230)} className='rounded-xl bg-blue-100 p-1 cursor-pointer' style={{ fill: '#002379' }} size={30} />
                <AiOutlineRight onClick={() => ScrollListWithRefAndOffset(nearYouRef,230)} className='rounded-xl bg-blue-100 p-1 cursor-pointer' style={{ fill: '#002379' }} size={30} />
            </div>
          </div>
          <div ref={nearYouRef} className="books noScollbar flex gap-10  overflow-scroll [&>div]:flex-shrink-0">

            { displayedBooks && displayedBooks.map((el, i)=>(
              <Link key={i} href={`/bookdetail/${el._id}`}>
              <div  className='w-40  flex flex-col items-center'>
                <div>
                  <img className=" w-32 h-48 my-4"  src={el.photos?.length ? el.photos[0] : "https://m.media-amazon.com/images/I/71t4GuxLCuL._AC_UF1000,1000_QL80_.jpg"} alt="" />
                </div>
                <div className='mb-1  text-sm font-medium text-center leading-4'>
                  <h1>{el.name} By {el.author}</h1>
                </div>
                <div className='text-sm font-medium'>
                  <h1>Price: {el.priceOfBorrowing}/W</h1>
                  <h1>Distance: {CalculateDistance(el.location.coordinates[0], el.location.coordinates[1], userLocation.latitude, userLocation.longitude)} Kms</h1>
                  <h1>Library: {el.library.length > 0? el.library[0].name : ''}</h1>
                </div>
              </div>
            </Link>  
            ))}

            <div className='w-40 flex flex-col items-center'>
              <div>
                <img className=" w-32 h-48 my-4"  src="https://5.imimg.com/data5/JU/IE/TE/SELLER-47422800/holistic-health-books-ikigai-the-japanese-secret-to-a-long-and-happy-life-500x500.jpg" alt="" />
              </div>
              <div className='mb-1 text-center font-medium leading-4 text-sm '>
                <h1>IKIGAI by Mo</h1>
              </div>
              <div className='text-sm font-medium'>
                <h1>Price: 20/W</h1>
              </div>
            </div>
          </div>
        </div>
        

        <div className='my-20'>
          <div className='flex justify-between'>

            <div className="explore_text text-2xl font-semibold mb-1">
              <h2>Libraries Near You</h2>
            </div>
            <div className='flex gap-5 pr-5'>
                <AiOutlineLeft onClick={() => ScrollListWithRefAndOffset(LibrariesRef, -230)} className='rounded-xl cursor-pointer  bg-blue-100 p-1' style={{ fill: '#002379' }} size={30} />
                <AiOutlineRight onClick={() => ScrollListWithRefAndOffset(LibrariesRef, 230)} className='rounded-xl cursor-pointer bg-blue-100 p-1' style={{ fill: '#002379' }} size={30} />
            </div>
          </div>
          <div ref={LibrariesRef} className="books noScollbar flex gap-10  overflow-scroll [&>div]:flex-shrink-0">
            {displayedLibraries.length > 0 && displayedLibraries.map((el,i)=>(
              <div key={i} className='w-40  flex flex-col items-center'>
                <Link href={`/library/${el._id}`}>
                  <div>
                    <img className=" w-32 h-48 my-4"  src={el.photo? el.photo : "https://m.media-amazon.com/images/I/71t4GuxLCuL._AC_UF1000,1000_QL80_.jpg"} alt="" />
                  </div>
                  <div className='mb-1  text-sm font-medium text-center leading-4'>
                    <h1>{el.name}</h1>
                  </div>
                  <div className='text-sm font-medium'>
                    <h1>Distance: {el.dist?.calculated.toFixed(2)}Kms</h1>
                  </div>
                </Link>
              </div>
            ))}
            

            <div className='w-40  flex flex-col items-center'>
              <div>
                <img className=" w-32 h-48 my-4"  src="https://5.imimg.com/data5/JU/IE/TE/SELLER-47422800/holistic-health-books-ikigai-the-japanese-secret-to-a-long-and-happy-life-500x500.jpg" alt="" />
              </div>
              <div className='mb-1 text-sm text-center font-medium leading-4'>
                <h1>IKIGAI by Mo</h1>
              </div>
              <div className='text-sm font-medium'>
                <h1>Price: 20/W</h1>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menupage