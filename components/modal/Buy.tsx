import React from 'react'
import { FaX } from 'react-icons/fa6'

const Buy = () => {
  return (
    <section className='fixed bg-darkBlue/70 inset-0 flex justify-center items-center min-h-screen'>
        <div className='flex flex-col bg-softBlue border border-lightBlue justify-between p-10 rounded-2xl gap-y-3'>
          <FaX className='text-xl place-self-end -mt-5'/>
          <div className=''>Enter Your Delivery Address</div>
          <div className='flex flex-col gap-y-3'>
            <input type='text'
            className='border border-darkBlue bg-lightBlue'/>
            <button className='bg-mainOrange py-1 rounded-2xl'>Confirm</button>
          </div>
        </div>
    </section>
  )
}

export default Buy