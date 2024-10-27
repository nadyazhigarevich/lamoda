import { useState } from 'react'

export const filterFunctions = {
    search: (product, searchTerm) => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()),

    color: (product, filters) => 
        filters.colors.length === 0 || filters.colors.includes(product.color),

    price: (product, filters) => 
        (!filters.priceRange.min || product.price >= Number(filters.priceRange.min)) &&
        (!filters.priceRange.max || product.price <= Number(filters.priceRange.max))
}

const useFilters = () => {
    const [filters, setFilters] = useState({
        colors: [],
        priceRange: { min: '', max: '' }
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
        handlePriceChange
    }
}

export default useFilters

export const filterProducts = (products, searchTerm, filters) => {
    return products.filter(product => 
        filterFunctions.search(product, searchTerm) &&
        filterFunctions.color(product, filters) &&
        filterFunctions.price(product, filters)
    )
}