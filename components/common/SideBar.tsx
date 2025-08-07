import React from 'react'
import { useState } from 'react'


const SideBar = () => {
    const [tempSelected, setTempSelected] = useState<string[]>([])
    const [selected, setSelected] = useState<string[]>([])
    const category = ["Beauty", "Fragrances", "Furniture", "Groceries", "Decoration", "Kitchen Accessories", "Laptops", "Mens Shirts", "Mens Shoes", "Mens Watches", "Mobile Accessories", "Motorcycle", "Skin Care", "Smartphones", "Sports Accessories", "Sunglasses", "Tablets", "Tops", "Vehicle", "Womens Bags", "Womens Dresses", "Womens Jewelries", "Womens Shoes", "Womens Watches"]

    const handleChange = (value: string) => {
        setTempSelected((prev) => (
            prev.includes(value) ? 
                prev.filter((v) => v != value) :
                [...prev, value]
        ))
    }

    const handleApply = () => {
        setSelected(tempSelected)
    }
  return (
    <section className='flex flex-col w-80 bg-softBlue px-20 gap-y-3 pt-10'>
        <div className='text-4xl'>Filters</div>
        <div className='flex flex-1 flex-col gap-y-5 border border-amber-500'>{
            category.map((item) => (
                <label className='flex gap-x-4 items-center '>
                    <input type='checkbox'
                    value={item}
                    onChange={(e) => handleChange(e.target.value)} 
                    className='accent-green-500 transform scale-170'/>
                    <div className=''>{item}</div>
                    
                </label>
            ))
            }</div>
    </section>
  )
}

export default SideBar