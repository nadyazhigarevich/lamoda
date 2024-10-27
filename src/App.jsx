import React, { useState } from 'react'
import Search from './components/Search'
import Sort from './components/Sort'
import Sidebar from './components/Sidebar'
import ProductList from './components/ProductList'
import useFilters from './utils/filters'

const App = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [sortOption, setSortOption] = useState('priceLow')
    const [totalProducts, setTotalProducts] = useState(0)
    const { filters, handleColorChange, handlePriceChange } = useFilters()

    return (
        <>
            <Search onSearch={setSearchTerm} />
            <Sort onSort={setSortOption} activeSort={sortOption} />
            <div className='flex justify-center'>
                <div className='flex w-4/5'>
                    <Sidebar 
                        filters={filters} 
                        onColorChange={handleColorChange} 
                        onPriceChange={handlePriceChange} 
                        totalProducts={totalProducts}
                    />
                    <ProductList 
                        searchTerm={searchTerm} 
                        sortOption={sortOption} 
                        filters={filters} 
                        onTotalProductsChange={setTotalProducts}
                    />
                </div>
            </div>
        </>
    )
}

export default App