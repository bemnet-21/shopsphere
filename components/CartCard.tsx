import { CartCardProps } from '@/interface'
import React from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '@/store/cart/cartSlice'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import Buy from './modal/Buy'
// import { setVisibility } from '@/store/modal/modalSlice'
import { closeBuyModal, openBuyModal } from '@/store/modal/buyModalSlice'

const CartCard: React.FC<CartCardProps> = ({
    thumbnail,
    title,
    price,
    id
}) => {
  // const modalVisibility = useSelector((state: RootState) => state.modalState.isVisible)
  const productIdForModal = useSelector((state: RootState) => state.buyModalState.productId)
  const dispatch = useDispatch()
  const handleRemove = () => {
    dispatch(removeFromCart(id))
  }
  const onClose = () => {
    // dispatch(setVisibility(false))
    dispatch(closeBuyModal())
  }
  const openModal = () => {
    // dispatch(setVisibility(true))
    dispatch(openBuyModal(id))
  }
  // const handleBuyNow = () => {
  //   dispatch(openBuyModal(id))
  // }

  return (

    <div className='w-96 bg-softBlue flex p-5 rounded-xl border border-lightBlue gap-x-5 md:w-md '>
      <Link href={`/product/${id}`}>
        <div className='relative w-36 h-36 bg-darkBlue rounded-xl transform transition-all duration-150 hover:scale-105 active:scale-100 active:brightness-90'>
                <Image 
                  src={thumbnail}
                  alt={title}
                  fill 
                />

          </div>
      </Link>
          <div className='flex flex-col w-1/2 gap-y-2'>
              <div>Name: {title}</div>
              <div>Price: ${price}</div>
              <button className='bg-mainOrange rounded-3xl cursor-pointer hover:bg-amber-700 active:bg-amber-800' onClick={openModal}>Buy Now</button>
              <button className='border border-[#FF0000] text-[#FF0000] rounded-3xl cursor-pointer hover:bg-[#ff0000] hover:text-[#fff] active:bg-[#DC2626] active:border-[#DC2626] active:text-white' onClick={handleRemove}>Remove</button>
          </div>
          <Buy isVisible={productIdForModal !== null} onClose={onClose} src='card' id={productIdForModal !== null ? productIdForModal : undefined}/>
    </div>
  )
}

export default CartCard