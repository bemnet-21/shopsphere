import { ModalProps } from '@/interface'
import React, { useState } from 'react'
import { FaX } from 'react-icons/fa6'

const CategoryModal: React.FC<ModalProps> = ({
  isVisible,
  onClose
}) => {

  const category = ["Beauty", "Fragrances", "Furniture", "Groceries", "Decoration", "Kitchen Accessories", "Laptops", "Mens Shirts", "Mens Shoes", "Mens Watches", "Mobile Accessories", "Motorcycle", "Skin Care", "Smartphones", "Sports Accessories", "Sunglasses", "Tablets", "Tops", "Vehicle", "Womens Bags", "Womens Dresses", "Womens Jewelries", "Womens Shoes", "Womens Watches"]

  const [tempSelected, setTempSelected] = useState<string[]>([])
  const [selected, setSelected] = useState<string[]>([])
  

  const handleChange = (value: string) => {
    setTempSelected((prev) => 
      prev.includes(value) ? 
        prev.filter(v => v !== value) 
        : [...prev, value] 
    )
  }

  const handleApply = () => {
    setSelected(tempSelected)
    onClose()
  }

  if (!isVisible) return null

  return (
    <div className='absolute inset-x-0 top-45 rounded-2xl bg-darkBlue/70 bottom-[-100vh]'>
      <div className='bg-softBlue  mx-5 p-10 rounded-3xl flex flex-col gap-y-5'>
        <button onClick={onClose} className='cursor-pointer'>
          <FaX className='place-self-end text-xl'/>
        </button>
        <div className='grid grid-cols-2 gap-x-4 gap-y-2'>
        {category.map(item => (
          <label key={item}>
            <input
              className='mr-1 accent-green-500 outline-0'
              type='checkbox'
              checked={tempSelected.includes(item)}
              value={item} 
              onChange={() => handleChange(item)}
              />
              {item}
          </label>
        ))}
        </div>
        <button className='bg-mainOrange w-full font-bold text-xl px-4 py-1 rounded-2xl place-self-center cursor-pointer'
        onClick={handleApply}>Apply</button>
      </div>
    </div>
  )
}

export default CategoryModal