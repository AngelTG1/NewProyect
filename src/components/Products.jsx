import { useCart } from "../hooks/useCart"


function Products({products}) {
    const { addToCart, cart, removerFromCart } = useCart()
    console.log(cart)

    const checkProductCart = product => {
        return cart.some(item => item.id === product.id)
    }

  return (
    <>
        <main className=" p-3">
            <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {products.map(product => {

                    const isProductInCart = checkProductCart(product)

                    return (
                        <li className='border flex flex-col gap-1' key={product.id}>
                            <img src={product.image} alt={product.title} />
                            <div>
                                <h3>{product.title}</h3>
                            </div>
                            <div>
                                <p>{product.price}</p>
                                <p className='line-clamp-2 '>{product.description}</p>
                            </div>
                            <div>
                                <button onClick={() => isProductInCart ? removerFromCart(product) : addToCart(product)} className=' inline-block bg-blue-500 p-2 rounded-lg text-white'>
                                    {
                                        isProductInCart ? "Eliminar" : "Agregar"
                                    }
                                </button>
                            </div>
                        </li>
                    )   
                })}
                
            </ul>
        </main>
    </>
  )
}

export default Products