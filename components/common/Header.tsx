import React from 'react'
import MenuModal from '../modal/MenuModal'
import { useState } from 'react'
import Link from 'next/link'


const Header = () => {
  const [menuModalVisibilty, setmenuModalVisibilty] = useState<boolean>(false)

  return (
    <header className='w-full h-21 bg-darkBlue border-b border-b-lightBlue font-playfair px-5 flex justify-between items-center'>
      <Link href='/'>
        <div className='text-4xl'>ShopSphere</div>
      </Link>
      <button onClick={() => setmenuModalVisibilty(true)} className='display-block sm:hidden'><img src='/assets/icons/menu.png' /></button>
      <div className='hidden sm:block'>
        <input type='text'
        placeholder='Search'
        className='bg-lightBlue w-40 p-2 rounded-full outline-0 font-poppins md:w-80 lg:w-lg' />
      </div>
      <div className='hidden text-lg justify-between sm:flex sm:w-32 md:w-2/10 lg:w-36'>
        <div>Login</div>
        <div>Sign UP</div>
      </div>
      <MenuModal 
           isVisible={menuModalVisibilty}
           onClose={() => setmenuModalVisibilty(false)} />
    </header>
  )
}

export default Header