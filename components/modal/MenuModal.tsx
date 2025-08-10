import { ModalProps } from '@/interface'
import React from 'react'
import { FaX } from 'react-icons/fa6'
import Link from 'next/link'
import { useRouter } from 'next/router'

const MenuModal: React.FC<ModalProps> = ({
  isVisible,
  onClose
}) => {

  
  const router = useRouter()
  const handleNav = (nav: string) => {
    onClose()
    router.push(nav)
  } 

  if(!isVisible) return null
  return (
    <div className='bg-darkBlue/50 absolute inset-y-14 inset-x-5 font-poppins h-screen'>
      <div className='flex flex-col items-center place-self-end bg-softBlue w-fit p-5 gap-y-4 rounded-2xl text-xl font-semibold'>
        <button onClick={onClose}>
          <FaX className='transform hover:scale-105 active:scale-100 rounded-full text-center'/>
        </button>
        <Link href='/' className='hover:bg-darkBlue w-full text-center' onClick={() => handleNav('/')}>Home</Link>
        <Link href='/cart' className='hover:bg-darkBlue w-full text-center' onClick={() => handleNav('/')}>My Cart</Link>
      </div>
    </div>
  )
}

export default MenuModal