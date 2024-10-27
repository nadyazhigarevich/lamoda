import React from 'react'

const FilterColor = ({ colors, selectedColors, onColorChange }) => {
    return (
        <div className="flex flex-col mt-5">
            <h3 className='border w-40 p-2 border-black font-medium'>By color</h3>
            <div className='flex flex-col w-40 bg-zinc-100 p-2'>
                {colors.map(color => (
                    <label key={color}>
                        <input 
                            type='checkbox' 
                            checked={selectedColors.includes(color)} 
                            onChange={() => onColorChange(color)} 
                        />
                        <span>{color}</span>
                    </label>
                ))}
            </div>
        </div>
    )
}

export default FilterColor