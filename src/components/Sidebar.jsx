import React from 'react'
import FilterColor from './FilterColor'
import FilterPrice from './FilterPrice'
import { COLORS } from '../utils/constants'

const Sidebar = ({ filters, onColorChange, onPriceChange, totalProducts }) => {
    return (
        <div className='flex justify-center'>
            <div className='flex flex-col'>
                <FilterColor 
                    colors={COLORS} 
                    selectedColors={filters.colors} 
                    onColorChange={onColorChange} 
                />
                <FilterPrice 
                    priceRange={filters.priceRange} 
                    onPriceChange={onPriceChange} 
                />
                <h1 className='font-medium mt-2'>Total products: {totalProducts}</h1>
            </div>
        </div>
    )
}

export default Sidebar