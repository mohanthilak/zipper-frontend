'use client'
import {useRef} from 'react'
import './Menupage.css'
import NavbarSignin from '../navbarSignin/page'
import {AiOutlineBell, AiOutlineLeft, AiOutlineRight} from "react-icons/ai"

const Menupage = () => {
  const nearYouRef = useRef();
  const exclusiveRef = useRef();
  const scrollN = (scrollOffset) => {
    nearYouRef.current.scrollLeft += scrollOffset;
  };
  const scrollE = (scrollOffset) => {
    exclusiveRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className='menupage  px-2 md:px-10 w-[100%] md:w-[80%] overflow-hidden' id='allBooks'>
      <NavbarSignin /> 
      <div className='mt-28 md:mt-16'>
        <div className='mb-12 flex justify-between items-center py-2'>
          <div className="explore_text text-3xl font-semibold">
            <h2 className='text-[#002379]'>Explore</h2>
          </div>

          <div className='flex items-center justify-between gap-5'>
            <div>
                <input style={{"boxShadow": "0 1px 10px 0 #808080", "outline": "none"}} className=' shadow-lg h-9 w-44 md:w-64  p-2 rounded-2xl' type="text" placeholder=" Search"  />
            </div>
            <div>
              <AiOutlineBell className=' cursor-pointer' size={30}/>
            </div>
          </div>
        </div>

        {/* Near You */}
        <div className='my-8'>
          <div className='flex justify-between'>
            <div className="explore_text text-2xl font-semibold mb-1">
              <h2>Near You</h2>
            </div>
            <div className='flex gap-5 pr-5'>
                <AiOutlineLeft onClick={() => scrollN(-230)} className='rounded-xl bg-blue-100 p-1 cursor-pointer' style={{ fill: '#002379' }} size={30} />
                <AiOutlineRight onClick={() => scrollN(230)} className='rounded-xl bg-blue-100 p-1 cursor-pointer' style={{ fill: '#002379' }} size={30} />
            </div>
          </div>
          <div ref={nearYouRef} className="books noScollbar flex gap-10  overflow-scroll [&>div]:flex-shrink-0">
            
            <div className='w-40  flex flex-col items-center'>
              <div>
                <img className=" w-32 h-48 my-4"  src="https://m.media-amazon.com/images/I/71t4GuxLCuL._AC_UF1000,1000_QL80_.jpg" alt="" />
              </div>
              <div className='mb-1  text-sm font-medium text-center leading-4'>
                <h1>The Subtle Art of Not Giving a F*ck</h1>
              </div>
              <div className='text-sm font-medium'>
                <h1>Price: 20/W</h1>
              </div>
            </div>
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

            <div className='w-40  flex flex-col items-center'>
              <div>
                <img className=" w-32 h-48 my-4"  src="https://m.media-amazon.com/images/I/710iakVqBcL._AC_UF1000,1000_QL80_.jpg" alt="" />
              </div>
              <div className='mb-1 text-center text-sm font-medium leading-4 '>
                <h1>The A.B.C. Murders</h1>
              </div>
              <div className='text-sm font-medium'>
                <h1>Price: 20/W</h1>
              </div>
            </div>

            <div className='w-40  flex flex-col items-center'>
              <div>
                <img className=" w-32 h-48 my-4"  src="https://m.media-amazon.com/images/I/41SfakDfYeS.jpg" alt="" />
              </div>
              <div className='mb-1 text-center text-sm font-medium leading-4 '>
                <h1>Once Upon a Time... in Hollywood</h1>
              </div>
              <div className='text-sm font-medium'>
                <h1>Price: 20/W</h1>
              </div>
            </div>

            <div className='w-40  flex flex-col items-center'>
              <div>
                <img className=" w-32 h-48 my-4"  src="https://m.media-amazon.com/images/I/41UV+L4HrIL._SY344_BO1,204,203,200_.jpg" alt="" />
              </div>
              <div className='mb-1 text-center text-sm  font-medium leading-4'>
                <h1>Elon Musk Biography</h1>
              </div>
              <div className='text-sm font-medium'>
                <h1>Price: 20/W</h1>
              </div>
            </div>

            <div className='w-40  flex flex-col items-center'>
              <div>
                <img className=" w-32 h-48 my-4"  src="https://5.imimg.com/data5/JU/IE/TE/SELLER-47422800/holistic-health-books-ikigai-the-japanese-secret-to-a-long-and-happy-life-500x500.jpg" alt="" />
              </div>
              <div className='mb-1  text-sm text-center font-medium leading-4'>
                <h1>IKIGAI by Mo</h1>
              </div>
              <div className='text-sm font-medium'>
                <h1>Price: 20/W</h1>
              </div>
            </div>

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


            

            {/* <div className="row w-56 bg-green-300">
              <img src="https://5.imimg.com/data5/JU/IE/TE/SELLER-47422800/holistic-health-books-ikigai-the-japanese-secret-to-a-long-and-happy-life-500x500.jpg" alt="" />
              <div className="book_title"></div>
              <div className="heart-icon">
                <i className='bx bx-heart'></i>
              </div>
              <div className="ratings">
                <i className='bx bx-star'></i>
                <i className='bx bx-star'></i>
                <i className='bx bx-star'></i>
                <i className='bx bxs-star-half'></i>
              </div>
              <div className="price">
                <h4>ikigai</h4>
                <p>RS.20/week</p>
              </div>
            </div> */}
            
            
            
            
          </div>
        </div>
        

        <div className='my-20'>
          <div className='flex justify-between'>

            <div className="explore_text text-2xl font-semibold mb-1">
              <h2>Exclusive</h2>
            </div>
            <div className='flex gap-5 pr-5'>
                <AiOutlineLeft onClick={() => scrollE(-230)} className='rounded-xl cursor-pointer  bg-blue-100 p-1' style={{ fill: '#002379' }} size={30} />
                <AiOutlineRight onClick={() => scrollE(230)} className='rounded-xl cursor-pointer bg-blue-100 p-1' style={{ fill: '#002379' }} size={30} />
            </div>
          </div>
          <div ref={exclusiveRef} className="books noScollbar flex gap-10  overflow-scroll [&>div]:flex-shrink-0">
            
            <div className='w-40  flex flex-col items-center'>
              <div>
                <img className=" w-32 h-48 my-4"  src="https://m.media-amazon.com/images/I/71t4GuxLCuL._AC_UF1000,1000_QL80_.jpg" alt="" />
              </div>
              <div className='mb-1  text-sm font-medium text-center leading-4'>
                <h1>The Subtle Art of Not Giving a F*ck</h1>
              </div>
              <div className='text-sm font-medium'>
                <h1>Price: 20/W</h1>
              </div>
            </div>
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

            <div className='w-40  flex flex-col items-center'>
              <div>
                <img className=" w-32 h-48 my-4"  src="https://m.media-amazon.com/images/I/710iakVqBcL._AC_UF1000,1000_QL80_.jpg" alt="" />
              </div>
              <div className='mb-1 text-center text-sm font-medium leading-4 '>
                <h1>The A.B.C. Murders</h1>
              </div>
              <div className='text-sm font-medium'>
                <h1>Price: 20/W</h1>
              </div>
            </div>

            <div className='w-40  flex flex-col items-center'>
              <div>
                <img className=" w-32 h-48 my-4"  src="https://m.media-amazon.com/images/I/41SfakDfYeS.jpg" alt="" />
              </div>
              <div className='mb-1 text-center text-sm font-medium leading-4 '>
                <h1>Once Upon a Time... in Hollywood</h1>
              </div>
              <div className='text-sm font-medium'>
                <h1>Price: 20/W</h1>
              </div>
            </div>

            <div className='w-40  flex flex-col items-center'>
              <div>
                <img className=" w-32 h-48 my-4"  src="https://m.media-amazon.com/images/I/41UV+L4HrIL._SY344_BO1,204,203,200_.jpg" alt="" />
              </div>
              <div className='mb-1 text-center text-sm  font-medium leading-4'>
                <h1>Elon Musk Biography</h1>
              </div>
              <div className='text-sm font-medium'>
                <h1>Price: 20/W</h1>
              </div>
            </div>

            <div className='w-40  flex flex-col items-center'>
              <div>
                <img className=" w-32 h-48 my-4"  src="https://5.imimg.com/data5/JU/IE/TE/SELLER-47422800/holistic-health-books-ikigai-the-japanese-secret-to-a-long-and-happy-life-500x500.jpg" alt="" />
              </div>
              <div className='mb-1  text-sm text-center font-medium leading-4'>
                <h1>IKIGAI by Mo</h1>
              </div>
              <div className='text-sm font-medium'>
                <h1>Price: 20/W</h1>
              </div>
            </div>

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

            {/* <div className="row w-56 bg-green-300">
              <img src="https://5.imimg.com/data5/JU/IE/TE/SELLER-47422800/holistic-health-books-ikigai-the-japanese-secret-to-a-long-and-happy-life-500x500.jpg" alt="" />
              <div className="book_title"></div>
              <div className="heart-icon">
                <i className='bx bx-heart'></i>
              </div>
              <div className="ratings">
                <i className='bx bx-star'></i>
                <i className='bx bx-star'></i>
                <i className='bx bx-star'></i>
                <i className='bx bxs-star-half'></i>
              </div>
              <div className="price">
                <h4>ikigai</h4>
                <p>RS.20/week</p>
              </div>
            </div> */}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menupage