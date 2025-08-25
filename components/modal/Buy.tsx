import React from 'react'
import { FaX } from 'react-icons/fa6'
import { BuyModalProps } from '@/interface'
import { useDispatch } from 'react-redux'
import { removeAll, removeFromCart } from '@/store/cart/cartSlice'

const Buy: React.FC<BuyModalProps> = ({
  isVisible,
  onClose,
  src,
  id
}) => {
  const dispatch = useDispatch()

  const handleSubmit = (src==='card') ? () => {
    alert('Order Confirmed!! Payment will be on Delivery')
    if (typeof id === 'number') {
      dispatch(removeFromCart(id))
    }
    onClose()
  }  : () => {
    alert('Order Confirmed!! Payment will be on Delivery')
    dispatch(removeAll())
  }
  // const handleSubmit = () => {
  //   alert('Order Confirmed!! Payment will be on Delivery')
  //   onClose()

  // }

  if(!isVisible) return null;
  return (
    <section className='fixed bg-darkBlue/70 inset-0 flex justify-center items-center min-h-screen'>
        <div className='flex flex-col bg-softBlue border border-lightBlue justify-between p-10 rounded-2xl gap-y-3'>
          <FaX className='text-xl place-self-end -mt-5 transform hover:scale-105 active:scale-100' onClick={onClose}/>
          <div className=''>Enter Your Delivery Address</div>
          <div className='flex flex-col gap-y-3'>
            <input type='text'
            className='border border-darkBlue bg-lightBlue'/>
            <button className='bg-mainOrange py-1 rounded-2xl cursor-pointer hover:bg-amber-700 active:bg-amber-800' onClick={handleSubmit}>Confirm</button>
          </div>
        </div>
    </section>
  )
}

export default Buy