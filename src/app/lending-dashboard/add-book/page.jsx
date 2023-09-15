import React from 'react'

const AddBook = () => {
  return (
    <div className="h-full">
        <div className="explore_text text-2xl mb-8 font-semibold">
              <h2>Add Book</h2>
        </div>

        <form className='flex flex-col gap-4 '>
            <div>
                <div>
                    <p className=' font-semibold'>Name of the Book</p>
                </div>
                <input className='w-72 h-8 border border-slate-400' type="text" />
            </div>
            <div>
                <div>
                    <p className=' font-semibold'>Name of the Author</p>
                </div>
                <input className='w-72 h-8 border border-slate-400' type="text" />
            </div>
            <div>
                <div>
                    <p className=' font-semibold'>Add Photos</p>
                </div>
                <input className='border border-slate-400' type="file" />
            </div>
            <div className='w-full '>
                <div>
                    <p className=' font-semibold'>About the book</p>
                </div>
                <textarea rows={40} cols={120} className='text-sm p-1 h-20 border border-slate-400' type="text"></textarea>
            </div>
            <div className='w-full flex gap-10'>
                <div>
                    <div>
                        <p className=' font-semibold'>Price of the Book</p>
                    </div>
                    <input className='w-72 h-8 border border-slate-400' type="number" />
                </div>
                <div>
                    <div>
                        <p className=' font-semibold'>Rate of Borrowing per week</p>
                    </div>
                    <input className='w-72 h-8 border border-slate-400' type="text" />
                </div>
            </div>

            <button className='bg-[#122042] w-32 h-12 text-white font-medium'>Add</button>
        </form>
    </div>
  )
}

export default AddBook