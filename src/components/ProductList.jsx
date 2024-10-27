import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { generateProducts, filterProducts, sortProducts } from '../utils/productUtils'

const ProductList = ({ searchTerm, sortOption, filters, onTotalProductsChange }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const initialProducts = generateProducts()
        setProducts(initialProducts)
    }, [])

    const filteredProducts = filterProducts(products, searchTerm, filters)
    const sortedProducts = sortProducts(filteredProducts, sortOption)
    const totalProducts = sortedProducts.length

    useEffect(() => {
        onTotalProductsChange(totalProducts)
    }, [totalProducts, onTotalProductsChange])

    return (
        <div className="flex flex-wrap gap-4 m-5">
            {sortedProducts.length > 0 ? (
                sortedProducts.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))
            ) : (
                <p>No products found</p>
            )}
        </div>
    )
}

export default ProductList