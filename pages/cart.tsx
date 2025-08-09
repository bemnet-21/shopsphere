import CartCard from '@/components/CartCard'
import { RootState } from '@/store'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'





const cart = () => {
  const cartList = useSelector((state: RootState) => state.cartState.item)
  console.log(cartList)
  

  if (cartList.length === 0) return <section className='w-full h-screen flex items-center justify-center'>No Products in your Cart</section>
  return (
    <section className='w-full h-screen flex flex-col gap-y-4 sm:w-3/4 border border-amber-300'>
        <div className='text-2xl font-bold'>My Cart</div>
        <div className='grid grid-cols-1 gap-y-4'>
          {cartList.map((product, index) => (
            <Link href={`/product/${product.id}`}>
              <CartCard key={index}
              thumbnail={product.thumbnail}
              price={product.price}
              title={product.title} />
            </Link>
          ))}
        </div>
    </section>
  )
  
}

export default cart