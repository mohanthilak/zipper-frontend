import React from 'react'

const CreateLibrary = () => {
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
                <input className='w-72 h-8 border border-slate-400' type="text" />
            </div>
            <div className='w-full '>
                <div>
                    <p className=' font-semibold'>About Library</p>
                </div>
                <textarea cols={120} className='text-sm h-20 p-1 border border-slate-400' type="text"></textarea>
            </div>
            <div className='w-full flex gap-10'>
                <div>
                    <div>
                        <p className=' font-semibold'>Latitude</p>
                    </div>
                    <input className='w-72 h-8 border border-slate-400' type="text" />
                </div>
                <div>
                    <div>
                        <p className=' font-semibold'>Logitude</p>
                    </div>
                    <input className='w-72 h-8 border border-slate-400' type="text" />
                </div>
            </div>
            <div className='w-full flex gap-10'>
                <div>
                    <div>
                        <p className=' font-semibold'>City</p>
                    </div>
                    <input className='w-72 h-8 border border-slate-400' type="text" />
                </div>
                <div>
                    <div>
                        <p className=' font-semibold'>State</p>
                    </div>
                    <input className='w-72 h-8 border border-slate-400' type="text" />
                </div>
            </div>
            <div className='w-full '>
                <div>
                    <p className=' font-semibold'>Address</p>
                </div>
                <textarea rows={40} cols={120} className='text-sm p-1 h-20 border border-slate-400' type="text"></textarea>
            </div>

            <button className='bg-[#122042] w-32 h-12 text-white font-medium'>Create</button>
        </form>
    </div>
  )
}

export default CreateLibrary