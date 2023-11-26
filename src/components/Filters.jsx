import React, { useState, useId } from 'react'
import { useFilters } from '../hooks/useFilters'

function Filters() {
    const { filters, setFilters } = useFilters()

    const minPriceFiltersId = useId()
    const categoryFiltersId = useId()

    const handleChangeMinPrice = (event) => {

        setFilters(prevState => ({
            ...prevState, 
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

  return (
    <>
        <div className='flex flex-row p-5 items-center justify-between'>
            <div>
                <label htmlFor="price">Price</label>
                <input type="range" id={minPriceFiltersId} min="0" max="1000" value={filters.minPrice} onChange={handleChangeMinPrice}  />
                <span>{filters.minPrice}</span>
            </div>

            <div className='border p-1'>
                <label htmlFor={categoryFiltersId}>Categoria</label>
                <select id={categoryFiltersId} onChange={handleChangeCategory}>
                    <option value="all">Todo</option>
                    <option value="men's clothing">Hombres</option>
                    <option value="women's clothing">Mujeres</option>
                </select>
            </div>
        </div>
    </>
  )
}

export default Filters