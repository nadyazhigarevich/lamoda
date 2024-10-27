export const sortProducts = (products, sortOption) => {
    return [...products].sort((a, b) => {
        switch (sortOption) {
            case 'priceLow':
                return a.price - b.price
            case 'priceHigh':
                return b.price - a.price
            case 'popularity':
                return b.rating - a.rating
            default:
                return 0
        }
    })
}