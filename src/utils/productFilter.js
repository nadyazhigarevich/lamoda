export const filterProducts = (products, searchTerm, filters) => {
    return products.filter(product => {
        const matchesSearch = 
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())

        const matchesColor = 
            filters.colors.length === 0 || 
            filters.colors.includes(product.color)

        const matchesPrice = 
            (!filters.priceRange.min || product.price >= Number(filters.priceRange.min)) &&
            (!filters.priceRange.max || product.price <= Number(filters.priceRange.max))

        return matchesSearch && matchesColor && matchesPrice
    })
}