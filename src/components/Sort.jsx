import React from 'react'

const Sort = ({ onSort, activeSort }) => {
    return (
        <div className='flex justify-center'>
            <div className='flex gap-4 w-4/5'>
                <button 
                    className={`border w-40 p-2 font-medium ${activeSort === 'priceLow' ? 'bg-black text-white' : 'border-black'}`} 
                    onClick={() => onSort('priceLow')}
                >
                    Price (Low to High)
                </button>
                <button 
                    className={`border w-40 p-2 font-medium ${activeSort === 'priceHigh' ? 'bg-black text-white' : 'border-black'}`} 
                    onClick={() => onSort('priceHigh')}
                >
                    Price (High to Low)
                </button>
                <button 
                    className={`border w-40 p-2 font-medium ${activeSort === 'popularity' ? 'bg-black text-white' : 'border-black'}`} 
                    onClick={() => onSort('popularity')}
                >
                    Popularity
                </button>
            </div>
        </div>
    )
}

export default Sort