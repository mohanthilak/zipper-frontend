import React from 'react'

const UserDetails = ({email, phoneNumber, name}) => {
  return (
    <div className='my-10'>
        <div className='my-4'>
            <h1 className=' text-2xl font-semibold '>Your Profile</h1>
        </div>

        <div className='my-4'>

            <div>
                <div>
                    <p className='text-lg font-medium'>Name</p>
                </div>
                <input value={name} type="text" className='h-8 w-64 border border-black'  />
            </div>
            
            
            <div className='flex flex-wrap gap-10 md:flex-nowrap justify-between md:w-2/3 mt-8'>
                <div>
                    <div>
                        <p className='text-lg font-medium'>Email</p>
                    </div>
                    <input value={email} type="email" className='h-8 w-64 border  border-black'  />
                </div>
                <div>
                    <div>
                        <p className='text-lg font-medium'>Phone number</p>
                    </div>
                    <input value={phoneNumber} type="number" className='h-8 w-64 border  border-black'  />
                </div>
            </div>
        </div>


        <div className='my-4 flex  justify-end gap-6'>
                <button className='px-2 border border-black w-24 h-8 text-md'>Edit</button>
                <button className='px-2 bg-black text-white w-24 h-8 text-md'>Save</button>
        </div>
    </div>
  )
}

export default UserDetails