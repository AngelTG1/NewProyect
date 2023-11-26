import React, { useId } from "react";
import { useCart } from "../hooks/useCart";
import { Link } from "react-router-dom";

function CartItem({ title, price, image, quantity, addToCart, decreaseQuantity, removerFromCart }) {
  return (
    <li className="border flex flex-col gap-1">
      <img src={image} alt={title} />
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <h3>precio: {price}</h3>
      </div>
      <div>
        <small>Cantidad: {quantity}</small>
        <button
          onClick={addToCart}
          className="inline-block items-center bg-blue-500 p-1 rounded-lg text-white text-2xl"
        >
          +
        </button>
        <button
          onClick={decreaseQuantity}
          className="inline-block items-center bg-blue-500 p-1 rounded-lg text-white text-2xl"
        >
          -
        </button>

        <button className="inline-block items-center bg-purple-900 p-1 rounded-lg text-white text-2xl" onClick={removerFromCart}>quitar</button>
      </div>
    </li>
  );
}

function Cart() {
  const { cart, clearCart, addToCart, decreaseQuantity, removerFromCart  } = useCart();
  return (
    <>
      <h1>CARRITO DE COMPRAS</h1>
      <Link to="/" > Home </Link>
      <div>
        <aside>
          <ul className="grid grid-cols-4">
            {cart.map((product) => (
              <CartItem
                key={product.id}
                addToCart={() => addToCart(product)}
                decreaseQuantity={() => decreaseQuantity(product)}
                removerFromCart={() => removerFromCart(product)}
                {...product}
               
              />
            ))}

            <div>
              <button
                onClick={clearCart}
                className="inline-block items-center bg-red-500 p-1 rounded-lg text-white text-2xl"
              >
                limpiar
              </button>
            </div>
          </ul>
        </aside>
      </div>
    </>
  );
}

export default Cart;
