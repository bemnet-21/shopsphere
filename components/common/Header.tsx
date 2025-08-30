import React from 'react'
import MenuModal from '../modal/MenuModal'
import { useState } from 'react'
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { updateSearchValue } from '@/store/search/searchSlice'



const Header = () => {
  const [menuModalVisibilty, setmenuModalVisibilty] = useState<boolean>(false)
  const [searchInput, setSearchInput] = useState('')
  const router = useRouter()
  const dispatch = useDispatch()


  const handleSearch = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    dispatch(updateSearchValue(searchInput))
    router.push('/search-result')
  }


  return (
    <header className='w-full h-21 bg-darkBlue border-b border-b-lightBlue font-playfair px-5 flex justify-between items-center z-15'>
      <Link href='/'>
        <div className='text-4xl'>ShopSphere</div>
      </Link>
      <form onSubmit={handleSearch} className='hidden relative lg:block'>
        <input type='text'
        placeholder='Search'
        value={searchInput}
        onChange={(e)=>setSearchInput(e.target.value)}
        className='bg-lightBlue w-40 p-2 rounded-full outline-0 font-poppins md:w-80 lg:w-lg' />
        <button type='submit'>
          <FaSearch className='absolute top-3 right-5 cursor-pointer'/>
        </button>
      </form>
      <button onClick={() => setmenuModalVisibilty(true)} className='display-block cursor-pointer xmd:hidden'><img src='/assets/icons/menu.png' alt='menu'/></button>
      <div className='hidden text-lg justify-between xmd:flex xmd:w-[15%]'>
        <Link href='/'>Home</Link>
        <Link href='/cart'>My Cart</Link>
      </div>
    
      <MenuModal 
           isVisible={menuModalVisibilty}
           onClose={() => setmenuModalVisibilty(false)} />
    </header>
  )
}

export default Header