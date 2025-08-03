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
    <div className='w-96 h-44 bg-softBlue border border-lightBlue rounded-2xl flex px-4 py-5 gap-x-4 mb-4'>
        <div className='relative bg-darkBlue rounded-xl w-36 h-36'>
            <Image src={thumbnail}
            alt='thumbnail'
            fill
            className='' />
        </div>
        <div className='h-36 flex flex-col justify-between'>
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