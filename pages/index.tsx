import React, { useEffect, useState } from 'react'
import { ProductProps } from '@/interface'
import ProductCard from '@/components/ProductCard'


const Home = () => {
  const [products, setProducts] = useState<ProductProps[]>([])
  useEffect(() => {
    const fetchProducts = async () => {
    try {
      const response  = await fetch('https://dummyjson.com/products')
      if(!response.ok) throw new Error('Failed to Fetch Products')

      const data = await response.json()
      setProducts(data.products)
      console.log(data.products)
      
    } catch (err) {
      console.error("Error: ", err)
    }
  }

  fetchProducts()
  }, [])
  return (
    <section className='bg-darkBlue text-white font-poppins font-light px-5 grid grid-cols-1'>
      {products.map((product)=>(
        <ProductCard key={product.id}
        id={product.id}
        title={product.title}
        thumbnail={product.thumbnail}
        stock={product.stock}
        price={product.price}
        category={product.category}
        rating={product.rating} />
      ))}
    </section>
  )
}

export default Home