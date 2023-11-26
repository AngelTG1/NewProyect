import React from 'react'
import { useFilters } from '../hooks/useFilters'
import { products as initialProducts } from '../mocks/products.json'
import Header from '../components/Header'
import Products from '../components/Products'

function Home() {
    const { filtersProducts } = useFilters()

    const filteredProducts = filtersProducts(initialProducts)
  return (
    <>
        <main>
            <Header/>
            <Products products={filteredProducts} />
        </main>
    </>
  )
}

export default Home