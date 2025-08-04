import { ModalProps } from '@/interface'
import React from 'react'
import { FaX } from 'react-icons/fa6'

const MenuModal: React.FC<ModalProps> = ({
  isVisible,
  onClose
}) => {

  if(!isVisible) return null
  return (
    <div className='bg-darkBlue/50 absolute inset-y-14 inset-x-5 font-poppins h-screen'>
      <div className='flex flex-col items-center place-self-end bg-softBlue w-fit p-5 gap-y-4 rounded-2xl text-xl font-semibold'>
        <button onClick={onClose}>
          <FaX />
        </button>
        <div>Login</div>
        <div>Sign Up</div>
      </div>
    </div>
  )
}

export default MenuModal