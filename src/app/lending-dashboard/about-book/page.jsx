import React from 'react'

const AboutBook = () => {
  return (
    <div className="h-full">
        <div className="explore_text text-2xl mb-4 font-semibold">
              <h2>The A B C Murders</h2>
        </div>


        <main className=''>
            <div className='flex mb-8'>
                {/* left */}
                <div className='mr-4 w-[20%]'>
                    <img className=" w-44 h-64 my-3"  src="https://m.media-amazon.com/images/I/710iakVqBcL._AC_UF1000,1000_QL80_.jpg" alt="" />
                </div>
                {/* Right */}
                <div className='flex flex-col gap-4 w-[75%]'>
                    <div>
                        <p ><span className='font-medium'>Price/week:</span> Rs:20</p>
                    </div>
                    <div>
                        <p><span className='font-medium'>About the Book:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consequuntur officiis et, consectetur, minima, dolorum sint officia placeat quasi dignissimos nostrum labore recusandae facilis eius iure asperiores maiores. Quis, consequuntur distinctio! Accusamus reprehenderit incidunt perspiciatis iure esse. Eos rerum iusto possimus reiciendis dolores. Minima deleniti assumenda debitis iusto voluptatum sequi nihil incidunt? Accusamus expedita nobis asperiores maxime officia, cum cumque vitae beatae dicta fugiat quisquam, eius consectetur. Sunt repudiandae numquam quo culpa porro voluptatibus nulla blanditiis aspernatur harum fugit voluptates officia facilis, sint rerum. Tempora nesciunt quod eos velit non, nam magni repellat quia quisquam accusamus voluptatibus aliquam exercitationem sunt!</p>
                    </div>
                    <div>
                        <p><span className='font-medium'>Revenue Generated:</span> Rs:200</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="explore_text text-xl  font-semibold">
                    <h2>Requests</h2>
                </div>
                <div className=' noScollbar px-4 pb-4 flex  gap-10  overflow-scroll [&>div]:flex-shrink-0 '>
                    <div className='w-56  p-2  shadow-slate-300 shadow-lg rounded-xl'>
                        <div className='flex my-2 items-center'>
                            <div className='w-[30%] '>
                                <img className=' rounded-full w-12 h-12' src="https://media1.popsugar-assets.com/files/thumbor/FGmHADvCrzNB5SRhW7iDHW4yz3E/0x24:2000x2024/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/05/13/045/n/1922398/e8decc595ebc8b217b9262.72649682_/i/Elizabeth-Olsen.jpg" alt="" />
                            </div>
                            <div className=' w-[65%]'>
                                <p className='text-lg font-semibold'>Lizzy</p>
                            </div>
                        </div>
                        <div className='my-2'>
                            <p className='mb-1 text-sm'> Request on: 12/7/23</p>
                            <p className='mb-1 text-sm'> Number of Books Borrowed: 4</p>
                        </div>
                        <div className='my-2 flex justify-center'>
                            <button className='px-4 py-1 bg-[#122042] text-white'>Issue</button>
                        </div>
                    </div>
                    <div className='w-56  p-2  shadow-slate-300 shadow-lg rounded-xl'>
                        <div className='flex my-2 items-center'>
                            <div className='w-[30%] '>
                                <img className=' rounded-full w-12 h-12' src="https://media1.popsugar-assets.com/files/thumbor/FGmHADvCrzNB5SRhW7iDHW4yz3E/0x24:2000x2024/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/05/13/045/n/1922398/e8decc595ebc8b217b9262.72649682_/i/Elizabeth-Olsen.jpg" alt="" />
                            </div>
                            <div className=' w-[65%]'>
                                <p className='text-lg font-semibold'>Lizzy</p>
                            </div>
                        </div>
                        <div className='my-2'>
                            <p className='mb-1 text-sm'> Request on: 12/7/23</p>
                            <p className='mb-1 text-sm'> Number of Books Borrowed: 4</p>
                        </div>
                        <div className='my-2 flex justify-center'>
                            <button className='px-4 py-1 bg-[#122042] text-white'>Issue</button>
                        </div>
                    </div>
                    <div className='w-56  p-2  shadow-slate-300 shadow-lg rounded-xl'>
                        <div className='flex my-2 items-center'>
                            <div className='w-[30%] '>
                                <img className=' rounded-full w-12 h-12' src="https://media1.popsugar-assets.com/files/thumbor/FGmHADvCrzNB5SRhW7iDHW4yz3E/0x24:2000x2024/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/05/13/045/n/1922398/e8decc595ebc8b217b9262.72649682_/i/Elizabeth-Olsen.jpg" alt="" />
                            </div>
                            <div className=' w-[65%]'>
                                <p className='text-lg font-semibold'>Lizzy</p>
                            </div>
                        </div>
                        <div className='my-2'>
                            <p className='mb-1 text-sm'> Request on: 12/7/23</p>
                            <p className='mb-1 text-sm'> Number of Books Borrowed: 4</p>
                        </div>
                        <div className='my-2 flex justify-center'>
                            <button className='px-4 py-1 bg-[#122042] text-white'>Issue</button>
                        </div>
                    </div>
                    <div className='w-56  p-2  shadow-slate-300 shadow-lg rounded-xl'>
                        <div className='flex my-2 items-center'>
                            <div className='w-[30%] '>
                                <img className=' rounded-full w-12 h-12' src="https://media1.popsugar-assets.com/files/thumbor/FGmHADvCrzNB5SRhW7iDHW4yz3E/0x24:2000x2024/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/05/13/045/n/1922398/e8decc595ebc8b217b9262.72649682_/i/Elizabeth-Olsen.jpg" alt="" />
                            </div>
                            <div className=' w-[65%]'>
                                <p className='text-lg font-semibold'>Lizzy</p>
                            </div>
                        </div>
                        <div className='my-2'>
                            <p className='mb-1 text-sm'> Request on: 12/7/23</p>
                            <p className='mb-1 text-sm'> Number of Books Borrowed: 4</p>
                        </div>
                        <div className='my-2 flex justify-center'>
                            <button className='px-4 py-1 bg-[#122042] text-white'>Issue</button>
                        </div>
                    </div>
                    <div className='w-56  p-2  shadow-slate-300 shadow-lg rounded-xl'>
                        <div className='flex my-2 items-center'>
                            <div className='w-[30%] '>
                                <img className=' rounded-full w-12 h-12' src="https://media1.popsugar-assets.com/files/thumbor/FGmHADvCrzNB5SRhW7iDHW4yz3E/0x24:2000x2024/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/05/13/045/n/1922398/e8decc595ebc8b217b9262.72649682_/i/Elizabeth-Olsen.jpg" alt="" />
                            </div>
                            <div className=' w-[65%]'>
                                <p className='text-lg font-semibold'>Lizzy</p>
                            </div>
                        </div>
                        <div className='my-2'>
                            <p className='mb-1 text-sm'> Request on: 12/7/23</p>
                            <p className='mb-1 text-sm'> Number of Books Borrowed: 4</p>
                        </div>
                        <div className='my-2 flex justify-center'>
                            <button className='px-4 py-1 bg-[#122042] text-white'>Issue</button>
                        </div>
                    </div>
                    <div className='w-56  p-2  shadow-slate-300 shadow-lg rounded-xl'>
                        <div className='flex my-2 items-center'>
                            <div className='w-[30%] '>
                                <img className=' rounded-full w-12 h-12' src="https://media1.popsugar-assets.com/files/thumbor/FGmHADvCrzNB5SRhW7iDHW4yz3E/0x24:2000x2024/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/05/13/045/n/1922398/e8decc595ebc8b217b9262.72649682_/i/Elizabeth-Olsen.jpg" alt="" />
                            </div>
                            <div className=' w-[65%]'>
                                <p className='text-lg font-semibold'>Lizzy</p>
                            </div>
                        </div>
                        <div className='my-2'>
                            <p className='mb-1 text-sm'> Request on: 12/7/23</p>
                            <p className='mb-1 text-sm'> Number of Books Borrowed: 4</p>
                        </div>
                        <div className='my-2 flex justify-center'>
                            <button className='px-4 py-1 bg-[#122042] text-white'>Issue</button>
                        </div>
                    </div>
                </div>
            </div>


        </main>
    </div>
  )
}

export default AboutBook