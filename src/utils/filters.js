import { useState } from 'react'

const useFilters = () => {
    const [filters, setFilters] = useState({
        colors: [],
        priceRange: { min: '', max: '' },
    })

    const handleColorChange = (color) => {
        setFilters(prev => ({
            ...prev,
            colors: prev.colors.includes(color) 
                ? prev.colors.filter(c => c !== color) 
                : [...prev.colors, color]
        }))
    }

    const handlePriceChange = (e) => {
        const { name, value } = e.target
        setFilters(prev => ({
            ...prev,
            priceRange: { ...prev.priceRange, [name]: value }
        }))
    }

    return {
        filters,
        handleColorChange,
        handlePriceChange,
    }
}

export default useFilters