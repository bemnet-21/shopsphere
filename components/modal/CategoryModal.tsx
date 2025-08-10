import { ModalProps } from '@/interface'
import { RootState } from '@/store'
import { addCategory } from '@/store/category/categorySlice'
import { setAsc, setDesc, setNone } from '@/store/price/priceSlice'
import React, { useState } from 'react'
import { FaX } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'

const CategoryModal: React.FC<ModalProps> = ({
  isVisible,
  onClose
}) => {

  const category = ["beauty", "fragrances", "furniture", "groceries", "decoration", "kitchen accessories", "laptops", "mens shirts", "mens shoes", "mens watches", "mobile accessories", "motorcycle", "skin care", "smartphones", "sports accessories", "sunglasses", "tablets", "tops", "vehicle", "womens bags", "womens dresses", "womens jewelries", "womens shoes", "womens watches"]

  const [tempSelected, setTempSelected] = useState<string[]>([])
  const dispatch = useDispatch()
  const priceOrder = useSelector((state: RootState) => state.priceState.order)

  

  const handleChange = (value: string) => {
    setTempSelected((prev) => 
      prev.includes(value) ? 
        prev.filter(v => v !== value) 
        : [...prev, value] 
    )
  }

  const handleApply = () => {
    dispatch(addCategory(tempSelected))
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
              {item.toUpperCase()}
          </label>
        ))}
        </div>

        <div className='text-4xl'>Price</div>
        <div className='flex flex-col'>
            <label>
              <input
                type='radio'
                name='price'
                value=''
                checked={priceOrder === ''}
                className='transform scale-120 accent-mainOrange mr-2'
                onChange={() => dispatch(setNone())}
              />
                Default
            </label>
            <label>
                <input
                    type='radio'
                    name='price'
                    value='Ascending'
                    checked={priceOrder === 'Ascending'}
                    className='transform scale-120 accent-mainOrange mr-2'
                    onChange={(e) => dispatch(setAsc(e.target.value))}
                />
                LOW To HIGH
            </label>
            <label>
                <input type='radio'
                name='price'
                value='Descending'
                checked={priceOrder === 'Descending'}
                className='transform scale-120 accent-mainOrange mr-2' 
                onChange={(e) => dispatch(setDesc(e.target.value))} />
                HIGH To LOW
            </label>
            </div>
            <button className='bg-mainOrange w-full font-bold text-xl px-4 py-1 rounded-2xl place-self-center cursor-pointer'
        onClick={handleApply}>Apply</button>
      </div>
    </div>
  )
}

export default CategoryModal