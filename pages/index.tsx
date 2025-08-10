import React, { useEffect, useState } from 'react'
import { ProductProps } from '@/interface'
import ProductCard from '@/components/ProductCard'
import CategoryModal from '@/components/modal/CategoryModal'
import Link from 'next/link'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { ClipLoader } from 'react-spinners'
import { FaSearch } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { updateSearchValue } from '@/store/search/searchSlice'


const Home = () => {
  const [allproducts, setallProducts] = useState<ProductProps[]>([])
  const productPerPage = 30
  const [currentPage, setCurrentPage] = useState(1)
  const [totalProducts, setTotalProducts] = useState(0)
  const [loading, setLoading] = useState(false)

  const totalPage = Math.ceil(totalProducts / productPerPage)

  const handlePrev = () => {
    setCurrentPage(prev => Math.max((prev - 1), 1))
  }
  const handleNext = () => {
    setCurrentPage(prev => Math.min((prev + 1), totalPage))
  }


  useEffect(() => {
    const fetchProducts = async () => {
    try {

      setLoading(true)
      const skip = (currentPage - 1) * productPerPage
      const response  = await fetch(`https://dummyjson.com/products?limit=${productPerPage}&skip=${skip}`)
      if(!response.ok) throw new Error('Failed to Fetch Products')
      
      const data = await response.json()
      setallProducts(data.products)
      setTotalProducts(data.total)

    } catch (err) {
      console.error("Error: ", err)
    } finally {
      setLoading(false)
    }
  }

  fetchProducts()
  }, [currentPage])

  const [categoryModalVisibilty, setCategoryModalVisibilty] = useState<boolean>(false)
  const [searchInput, setSearchInput] = useState('')
  
  const userSelectedCategory = useSelector((state: RootState) => state.categoriesState.selected)
  const priceOrder = useSelector((state: RootState) => state.priceState.order)
  const dispatch = useDispatch()
  const router = useRouter()

  const categoryFiltered = userSelectedCategory.length > 0
    ? allproducts.filter(product => userSelectedCategory.includes(product.category))
    : allproducts;


  const sortedProducts = [...categoryFiltered]
  if (priceOrder === 'Ascending') {
    sortedProducts.sort((a, z) => a.price - z.price)
  } else if (priceOrder == 'Descending') {
    sortedProducts.sort((a, z) => z.price - a.price)
  }

  const handleSearch = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    dispatch(updateSearchValue(searchInput))
    router.push('/search-result')
  }
  
  if (loading) return (
    <div className='w-full h-screen flex justify-center items-center'>
      <ClipLoader color='#fff' size={200} />
    </div>
  )
  return (
    <>
    <div className='flex items-center'>
      <button className='display-block bg-softBlue text-white text-2xl rounded-xl mx-5 my-4 px-4 py-2 w-fit cursor-pointer lg:hidden'
      onClick={() => setCategoryModalVisibilty(true)}
      >
        Filters
      </button>
      <form onSubmit={handleSearch} className='relative flex-1 w-full lg:hidden'>
              <input type='text'
              placeholder='Search'
              value={searchInput}
              onChange={(e)=>setSearchInput(e.target.value)}
              className='bg-lightBlue w-full p-2 rounded-full outline-0 font-poppins lg:w-lg' />
              <button type='submit'>
                <FaSearch className='absolute top-3 right-5 cursor-pointer'/>
              </button>
      </form>
    </div>
      <div className='md:h-screen'>
        <section className='font-light pt-10 px-5 grid grid-cols-1 gap-4 md:pl-15 w-full md:grid-cols-2  md:-z-0 '>
          {
            sortedProducts.map((product)=>(
              <Link href={`/product/${product.id}`} key={product.id} className='md:w-fit md:h-fit'>
                <ProductCard key={product.id}
                  id={product.id}
                  title={product.title}
                  thumbnail={product.thumbnail}
                  stock={product.stock}
                  price={product.price}
                  category={product.category}
                  rating={product.rating} />
              </Link>
            ))
          }
        </section>
        <div className='flex gap-x-4 items-center place-self-center py-10'>
          <BiChevronLeft className='text-4xl cursor-pointer hover:bg-lightBlue hover:rounded-full' onClick={handlePrev}/>
          <span>
            {`Page ${currentPage} of ${totalPage}`}
          </span>
          <BiChevronRight className='text-4xl cursor-pointer hover:bg-lightBlue hover:rounded-full' onClick={handleNext}/>
        </div>
      </div>
      <CategoryModal isVisible={categoryModalVisibilty}
      onClose={() => setCategoryModalVisibilty(false)} />
      

    </>
  )
}

export default Home