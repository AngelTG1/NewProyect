import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider ({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = product => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        if(productInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
        }

        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))
    }

    const clearCart = () => {
        setCart([])
    }

    const decreaseQuantity = (product) => {
        const productInCartIndex = cart.findIndex((item) => item.id === product.id);
        if (productInCartIndex >= 0) {
          const newCart = [...cart];
          if (newCart[productInCartIndex].quantity > 1) {
            newCart[productInCartIndex].quantity -= 1;
          }
          setCart(newCart);
        }
      };

    const removerFromCart = product => {
        setCart(prevState => prevState.filter(item => item.id !== product.id ))
    }
    // const removeFromCart = product => {
    //     const productIndex = cart.findIndex(item => item.id === product.id);
    
    //     if (productIndex >= 0) {
    //         const newCart = [...cart];
    //         newCart.splice(productIndex, 1); // Elimina el producto en la posición productIndex
    //         setCart(newCart);
    //     }
    // }

    return (
        <CartContext.Provider value={{cart, addToCart, clearCart, removerFromCart, decreaseQuantity}}>
            {children}
        </CartContext.Provider> 
    )
}