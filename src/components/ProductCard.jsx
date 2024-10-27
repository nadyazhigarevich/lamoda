import React from 'react'

const ProductCard = ({ product }) => {
    const { imageUrl, name, description, color, price, rating } = product

    return (
        <div className='w-44 bg-zinc-100'>
            <img className="w-full h-48 object-cover" src={imageUrl} alt={name} />
            <div className='p-1'>
                <h1 className='text-lg font-semibold'>{name}</h1>
                <p className='text-xs text-zinc-400'>{description}</p>
                <div className='flex flex-col mt-1'>
                    <h5 className='text-sm mx-1'>Color: {color}</h5>
                    <h5 className='text-sm mx-1'>Price: {price}</h5>
                    <h5 className='text-sm mx-1'>Rating: {rating}</h5>
                </div>
            </div>
        </div>
    )
}

export default ProductCard