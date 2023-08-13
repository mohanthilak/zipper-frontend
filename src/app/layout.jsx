'use client'
import './globals.css'
import { usePathname } from 'next/navigation';
export const metadata = {
  title: 'Zipper',
  description: 'Generated by create next app',
}

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
          {pathname !== "/login" ? <div className='flex'>  
            <div className='h-screen sticky top-0 border w-[18%] pt-16 p-6 border-black'>
                <h1 className='text-lg text-black'>hi there! {pathname}</h1>
            </div>
            {children}
            </div> : [children]
          }
        </body>
    </html>
  )
}
