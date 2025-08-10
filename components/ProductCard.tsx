import { ProductCardProps } from '@/interface'
import Image from 'next/image'
import React from 'react'

const ProductCard: React.FC<ProductCardProps> = ({
    id,
    title,
    category,
    price,
    stock,
    rating,
    thumbnail
}) => {
  return (
    <div className='w-full  bg-softBlue border border-lightBlue rounded-2xl flex px-4 py-5 gap-x-4 mb-4 md:h-96 md:flex-col md:items-center md:w-64 md:gap-y-2 transform transition-all duration-150 hover:scale-105 active:scale-100 active:brightness-90'>
        <div className=' bg-darkBlue rounded-xl w-36  flex-shrink-0 md:w-48 h-45'>
            <Image src={thumbnail}
            alt='thumbnail'
            width={180}
            height={180}
            sizes="(min-width: 768px) 180px, 144px"
            className=' object-contain' />
        </div>
        <div className=' flex flex-1  flex-col justify-between md:w-48'>
            <div>Name: {title}</div>
            <div>Category: {category}</div>
            <div>Price: ${price}</div>
            <div>Stock: {stock}</div>
            <div>Rating: {rating}</div>
        </div>
    </div>
  )
}

export default ProductCard