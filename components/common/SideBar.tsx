import { RootState } from '@/store'
import { addCategory } from '@/store/category/categorySlice'
import { setAsc, setDesc, setNone } from '@/store/price/priceSlice'
import { useRouter } from 'next/router'
import React from 'react'
import { useState, useEffect } from 'react'
import { FaCheck } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'


const SideBar = () => {
    const router = useRouter()
    const selectedState = useSelector((state: RootState) => state.categoriesState.selected)
    const dispatch = useDispatch()

    const [tempSelected, setTempSelected] = useState<string[]>([])
    const category = ["beauty", "fragrances", "furniture", "groceries", "decoration", "kitchen accessories", "laptops", "mens shirts", "mens shoes", "mens watches", "mobile accessories", "motorcycle", "skin care", "smartphones", "sports accessories", "sunglasses", "tablets", "tops", "vehicle", "womens bags", "womens dresses", "womens jewelries", "womens shoes", "womens watches"]

    useEffect(() => {
        setTempSelected(selectedState);
    }, [selectedState]);

    const handleChange = (value: string) => {
        setTempSelected((prev) => (
            prev.includes(value) ? 
                prev.filter((v) => v != value) :
                [...prev, value]
        ))

    }

    const handleApply = () => {
        dispatch(addCategory(tempSelected))
    }

    if (router.pathname !== '/') return null
  return (
    <aside className='hidden flex-col w-80 h-[957px] bg-softBlue px-20 gap-y-5 pt-10 pb-30 lg:flex'>
        <div className='text-4xl'>Filters</div>
        <div className='flex-1 overflow-y-auto scrollbar-container pl-1 scroll-smooth'>
            <div className='flex flex-1 flex-col gap-y-5'>{
                category.map((item) => (
                    <label key={item} className='flex gap-x-4 items-center relative cursor-pointer'>
                        <input 
                        id='check-box-1'
                        type='checkbox'
                        value={item}
                        checked={tempSelected.includes(item)}
                        onChange={(e) => handleChange(e.target.value)} 
                        // className='accent-mainOrange transform scale-170'
                        className='appearance-none h-5 w-5 border-1 shrink-0 rounded-sm border-mainOrange cursor-pointer '
                        />
                        <FaCheck className='text-darkBlue text-xs absolute left-1 opacity-0 check-1'/>
                        <div className=''>{item}</div>
                        
                    </label>
                ))
                }</div>
        </div>
        <div className='text-4xl'>Price</div>
        <div className='flex flex-col'>
            <label className='flex gap-x-2 items-center'>
                <input
                    type='radio'
                    name='price'
                    value=''
                    id='radio-button-default'
                    className='appearance-none w-4 h-4 rounded-lg border-1 border-mainOrange'
                    // className='transform scale-120 accent-mainOrange mr-2'
                    onChange={() => dispatch(setNone())}
                />
                <div>Default</div>
            </label>
            <label className='flex gap-x-2'>
                <input
                    id='radio-button-asec'
                    type='radio'
                    name='price'
                    value='Ascending'
                    className='appearance-none w-4 h-4 rounded-lg border-1 border-mainOrange'
                    onChange={(e) => dispatch(setAsc(e.target.value))}
                />
                LOW To HIGH
            </label>
            <label className='flex gap-x-2'>
                <input type='radio'
                id='radio-button-desc'
                name='price'
                value='Descending'
                className='appearance-none w-4 h-4 rounded-lg border-1 border-mainOrange'
                onChange={(e) => dispatch(setDesc(e.target.value))} />
                <div>HIGH To LOW</div>
            </label>
        </div>
        <button className='bg-mainOrange rounded-xl py-1 cursor-pointer hover:bg-amber-700 active:bg-amber-800' onClick={handleApply}>Apply</button>
    </aside>
  )
}

export default SideBar