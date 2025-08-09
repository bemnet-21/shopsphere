import { CartCardProps } from '@/interface'
import React from 'react'
import Image from 'next/image'

const CartCard: React.FC<CartCardProps> = ({
    thumbnail,
    title,
    price
}) => {
  return (
    <div className='bg-softBlue flex p-5 rounded-xl border border-lightBlue gap-x-5'>
        <div className='relative w-36 h-36 bg-darkBlue rounded-xl'>
                <Image 
                  src={thumbnail}
                  alt={title}
                  fill 
                />

              </div>
              <div className='flex flex-col w-1/2 gap-y-2'>
                <div>Name: {title}</div>
                <div>Price: ${price}</div>
                <button className='bg-mainOrange rounded-3xl'>Buy Now</button>
                <button className='border border-[#FF0000] rounded-3xl'><span className='text-[#FF0000]'>Remove</span></button>
              </div>
    </div>
  )
}

export default CartCard