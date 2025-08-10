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

  interface SearchEvent extends React.FormEvent<HTMLFormElement> {}

  const handleSearch = (e: SearchEvent): void => {
    e.preventDefault()
    dispatch(updateSearchValue(searchInput))
    router.push('/search-result')
  }


  return (
    <header className='w-full h-21 bg-darkBlue border-b border-b-lightBlue font-playfair px-5 flex justify-between items-center z-15'>
      <Link href='/'>
        <div className='text-4xl'>ShopSphere</div>
      </Link>
      <button onClick={() => setmenuModalVisibilty(true)} className='display-block sm:hidden'><img src='/assets/icons/menu.png' /></button>
      <form onSubmit={handleSearch} className='hidden relative sm:block'>
        <input type='text'
        placeholder='Search'
        value={searchInput}
        onChange={(e)=>setSearchInput(e.target.value)}
        className='bg-lightBlue w-40 p-2 rounded-full outline-0 font-poppins md:w-80 lg:w-lg' />
        <button type='submit'>
          <FaSearch className='absolute top-3 right-5 cursor-pointer'/>
        </button>
      </form>
      <div className='hidden text-lg justify-between sm:flex sm:w-32 md:w-2/10 lg:w-36'>
        <Link href='/cart'>Login</Link>
        <div>Sign UP</div>
      </div>
      <MenuModal 
           isVisible={menuModalVisibilty}
           onClose={() => setmenuModalVisibilty(false)} />
    </header>
  )
}

export default Header