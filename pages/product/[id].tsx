import { ProductDetailProps } from '@/interface'
import { RootState } from '@/store'
import { addToCart } from '@/store/cart/cartSlice'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const total = 194
export async function getStaticPaths() {
  const response = await fetch('https://dummyjson.com/products?limit=194')
  const data = await response.json()

  const paths = data.products.map((product: ProductDetailProps) => (
    { params: { id: product.id.toString() } }
  ))
  

  return { paths, fallback: false}
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const response = await fetch(`https://dummyjson.com/products/${params.id}`)
  const product = await response.json()

  return { props: {product} }
  
}


const ProductDetail = ({product} : {product: ProductDetailProps}) => {

  const cartList = useSelector((state:RootState) => state.cartState.item)
  const dispatch = useDispatch()
  const handleAddToCart = () => {
    dispatch(addToCart({title: product.title, price: product.price, thumbnail: product.thumbnail, id:product.id }))
  }
  console.log("Cart: ", cartList)


  const images = product.images.filter((image) => image !== product.images[0])
  
  return (
    <section className='flex flex-col items-center mt-16 gap-y-6 px-5 pb-12 sm:px-16 md:px-32 lg:px-64'>
      <div className='bg-mainOrange px-4 py-1 rounded-xl w-fit text-xl text-center'>{product.title}</div>
      <div>
        <div className='relative w-72 h-72 bg-softBlue rounded-xl border border-lightBlue'>
          <Image
            src={product.images[0]}
            alt={`${product.title} image - 1`}
            fill
            className='object-contain'
            />
        </div>
        {images.map((image, index) => (
          <div className='hidden relative w-72 h-72'>
            <Image
              key={index}
              src={image}
              alt={`${product.title} image - ${index}`}
              fill />
          </div>
        ))}
      </div>
      <div className='bg-softBlue flex flex-col gap-y-3 p-3.5 rounded-xl'>
        <div className='bg-mainOrange px-4 rounded-xl w-fit text-xl'>{product.brand}</div>
        <div>
          {product.description}
        </div>        
      <div className='flex justify-between'>
        <div className='bg-mainOrange px-4 py-1 rounded-xl w-fit text-xl'>Price: ${product.price}</div>
        <div className='bg-mainOrange px-4 py-1 rounded-xl w-fit text-xl'>Stock: {product.stock}</div>
      </div>
      </div>
      <Link href='/cart'>
        Go To Cart
      </Link>
      <div className='flex flex-col items-center w-full gap-y-3 text-xl'>
        <button className='bg-mainOrange w-9/10 py-1 rounded-xl sm:w-1/2 md:w-1/4 cursor-pointer hover:bg-amber-700 active:bg-amber-800' onClick={handleAddToCart}>Add to Cart</button>
        <button className='border border-mainOrange text-mainOrange w-9/10 py-1 rounded-xl sm:w-1/2 md:w-1/4'>Buy Now</button>
      </div>
      <div className='bg-softBlue flex flex-col gap-y-3 p-3.5 rounded-xl w-full'>
        <div className='bg-mainOrange px-4 rounded-xl w-fit text-xl'>More Info</div>
        <div className='flex flex-col text-xl'>
          <div className='flex justify-between items-center border-y border-lightBlue h-fit md:h-16'>
            <div className=''>Warranty</div>
            <div className='w-2/5'>{product.warrantyInformation}</div>
          </div>
          <div className='flex justify-between items-center border-y border-lightBlue h-fit md:h-16'>
            <div>Shipment</div>
            <div className='w-2/5'>{product.shippingInformation}</div>
          </div>
          <div className='flex justify-between items-center border-y border-lightBlue h-fit md:h-16'>
            <div>Return Policy</div>
            <div className='w-2/5'>{product.returnPolicy}</div>
          </div>
        </div>
      </div>
      <div className='bg-softBlue flex flex-col gap-y-3 p-3.5 rounded-xl w-full'>
        <div className='flex justify-between'>
          <div className='bg-mainOrange px-4 rounded-xl w-fit text-xl'>Reviews</div>
          <div className='flex items-center gap-x-1'>
            <FaStar className='text-2xl text-mainOrange' />
            <div className='text-xl'>{product.rating}</div>
          </div>
        </div>
        {
          product.reviews.map((review, index) => (
            <div className='flex border-t border-lightBlue pt-2 gap-x-3'>
              <div className='relative w-16 h-16'>
                <Image
                  key={index}
                  src={`/assets/Generic avatar.png`}
                  alt='avatar'
                  fill />
              </div>
              <div className='flex flex-col'>
                <div>{review.reviewerName}</div>
                <div className='text-xs font-extralight'>{review.reviewerEmail}</div>
                <div className='text-sm font-light italic'>{review.comment}</div>
                <div className='flex items-center'>
                  <FaStar className='text-lg text-mainOrange' />
                  <div className='text-lg'>{review.rating}</div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default ProductDetail