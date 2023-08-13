'use client'
import './globals.css'
import { usePathname } from 'next/navigation';
export const metadata = {
  title: 'Zipper',
  description: 'Generated by create next app',
}
import { AiOutlineRight} from "react-icons/ai"


export default function RootLayout({ children }) {
  const pathname = usePathname();
  // console.log(pathname)
  return (
    <html lang="en">
    <head>
    <link rel="stylesheet"
  href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"/>
    <link rel="icon" href="./lol.jpg" sizes="any" />
    </head>
      <body>
          {pathname !== "/login" && pathname !== "/"? <div className='flex'>  
            <div className='hidden md:flex h-screen sticky top-0 border w-[20%] bg-[#F4F4F6] pt-16 p-6  flex-col justify-between'>
              <div className='flex gap-5 items-center'>
                  <div> 
                    <img className=' rounded-lg w-16 h-16' src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2023%2F05%2F25%2FElizabeth-Olsen-01-052523.jpg" alt="" />
                  </div>
                  <div>
                    <h1 className='text-xl font-bold mb-1 text-[#002379]'>Lizzie Olsen</h1>
                    <p className='text-sm font-light'>RT Nagar</p>
                    {/* <p className='text-xs underline'>See the Lending Dashboard</p> */}
                  </div>
              </div>

                <div className='flex flex-col'>
                  <div className='py-2  cursor-pointer'>
                    <h1 className='font-semibold text-xl '>Lending:</h1>
                  </div>
                  <div className='flex justify-between items-center py-1 hover:underline cursor-pointer'>
                    <h1 className='font-semibold text-lg '>Lending Dashboard</h1>
                    <AiOutlineRight  size={15}/>
                  </div>
                </div>
                <div className='flex flex-col '>
                  <div className='py-2 cursor-pointer'>
                    <h1 className='font-semibold text-xl '>Borrowing:</h1>
                  </div>
                  <div className='flex justify-between items-center py-2 hover:underline cursor-pointer'>
                    <h1 className='font-semibold text-lg '>Reading List</h1>
                    <AiOutlineRight  size={15}/>
                  </div>
                  <div className='flex justify-between items-center py-2 hover:underline cursor-pointer'>
                    <h1 className='font-semibold text-lg'>Borrowings</h1>
                    <AiOutlineRight  size={15}/>
                  </div>
                  <div className='flex justify-between items-center py-2 hover:underline cursor-pointer'>
                    <h1 className='font-semibold text-lg'>Libraries</h1>
                    <AiOutlineRight  size={15}/>
                  </div>
                  <div className='flex justify-between items-center py-2 hover:underline cursor-pointer'>
                    <h1 className='font-semibold text-lg'>Books</h1>
                    <AiOutlineRight  size={15}/>
                  </div>
                </div>

                <div>
                  <h1 className='font-semibold text-lg py-1 text-[#002379]'>Currently Reading</h1>
                  <div className='flex gap-5'>
                    <img className=" w-10 h-16"  src="https://m.media-amazon.com/images/I/71t4GuxLCuL._AC_UF1000,1000_QL80_.jpg" alt="" />
                    <div>
                      <p className=' text-sm font-medium'>The Subtle Art of Not Giving a F*ck</p>
                      <p className='text-xs font-medium'>Number of weeks: 2</p>
                      <p className='text-xs font-medium'>Price: 40</p>
                    </div>
                  </div>
                </div>
                {/* <h1 className='text-lg text-black'>hi there! {pathname}</h1> */}
            </div>
            {children}
            </div> : [children]
          }
        </body>
    </html>
  )
}
