import { RootState } from '@/store'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { ProductCardProps } from '@/interface'

const search = () => {
  const searchValue = useSelector((state: RootState) => state.searchState.value)
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState<ProductCardProps[]>([])

  useEffect(() => {
    const fetchSearchProducts = async () => {
      try {

        setLoading(true)
        const res = await fetch(`https://dummyjson.com/products/search?q=${searchValue}`)
        if(!res.ok) throw new Error('Failed to Fetch Products')
        const data = await res.json()
        setProducts(data.products)
      } catch(err) {
        console.error("Error: ", err)
      } finally {
        setLoading(false)
      }
    }

    fetchSearchProducts()
  }, [searchValue])

  if(loading) return <section className='w-full min-h-screen flex justify-center items-center'>Searching...</section>

  if(products.length>0) {
    return (
      <section className='font-light pt-10 px-5 grid grid-cols-1 gap-4 md:pl-15 w-full md:grid-cols-2 lg:grid-cols-3  md:-z-0 '>
        {
          products.map((product) => (
            <Link href={`/product/${product.id}`} className='md:w-fit md:h-fit'>
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
    )
  } else {
    return (
      <section className='w-full min-h-screen flex justify-center items-center'>No Products were found</section>
    )
  }
}

export default search