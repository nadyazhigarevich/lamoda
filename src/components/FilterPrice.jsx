import React from 'react'

const FilterPrice = ({ priceRange, onPriceChange }) => {
    return (
        <div className='mt-5'>
            <h3 className='border w-40 p-2 border-black font-medium'>By price</h3>
            <div className='flex justify-between w-40 bg-zinc-100 p-3'>
                <input
                    className='w-2/5 border border-black text-center'
                    type='number'
                    name='min'
                    value={priceRange.min}
                    onChange={onPriceChange}
                    placeholder='from'
                />
                -
                <input
                    className='w-2/5 border border-black text-center'
                    type='number'
                    name='max'
                    value={priceRange.max}
                    onChange={onPriceChange}
                    placeholder='to'
                />
            </div>
        </div>
    )
}

export default FilterPrice