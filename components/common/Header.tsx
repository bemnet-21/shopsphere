import React from 'react'
import MenuModal from '../modal/MenuModal'
import { useState } from 'react'


const Header = () => {
  const [menuModalVisibilty, setmenuModalVisibilty] = useState<boolean>(false)

  return (
    <header className='w-full h-21 bg-darkBlue  text-xl border-b border-b-lightBlue font-playfair px-5 flex justify-between items-center'>
        <div>ShopSphere</div>
        <button onClick={() => setmenuModalVisibilty(true)}><img src='/assets/icons/menu.png' /></button>
        <MenuModal 
            isVisible={menuModalVisibilty}
            onClose={() => setmenuModalVisibilty(false)} />
    </header>
  )
}

export default Header