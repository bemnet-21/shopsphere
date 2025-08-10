import CartCard from '@/components/CartCard'
import { RootState } from '@/store'
import React from 'react'
import { useSelector } from 'react-redux'





const Cart: React.FC = () => {
  const cartList = useSelector((state: RootState) => state.cartState.item)
  const totalPrice = cartList.reduce((count, product) => count + product.price, 0)
  console.log(cartList)
  

  if (cartList.length === 0) return <section className='w-full h-screen flex items-center justify-center'>No Products in your Cart</section>
  return (
    <section className='w-full min-h-screen flex flex-col gap-y-10 pb-8'>
        <div className='text-2xl font-bold md:text-5xl'>My Cart</div>
        <div className='grid grid-cols-1 gap-4 md:mx-auto md:grid-cols-2'>
          {cartList.map((product, index) => (
              <CartCard key={index}
              thumbnail={product.thumbnail}
              price={product.price}
              title={product.title}
              id={product.id} />
          ))}
        </div>
        <div className='flex text-xl justify-between font-bold md:mx-auto md:w-4xl md:text-3xl'>
          <div>Total</div>
          <div>${totalPrice.toFixed(2)}</div>
        </div>
        <button className='bg-mainOrange w-sm py-2 text-3xl rounded-2xl mt-12 md:w-sm md:mx-auto md:text-3xl md:py-2 cursor-pointer hover:bg-amber-700 active:bg-amber-800'>Buy All</button>
    </section>
  )
  
}

export default Cart