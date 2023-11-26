import React from 'react'
import Filters from './Filters'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <h1>React compra</h1>
        <Link to="/cart">
          <button>carrito</button>
        </Link>
        <Filters />
    </header>
  )
}

export default Header