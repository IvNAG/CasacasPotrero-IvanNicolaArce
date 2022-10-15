import React from "react";
import { useCart } from "../../context/ShopProvider";
import {FaTrashAlt} from 'react-icons/fa'
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, emptyCart, cartTotal } = useCart();
  const total = cartTotal()
  const navigate = useNavigate()
  return (
    <div>
      {cart.length === 0
      ? <h2>El carrito de compra esta vacio.</h2>
      : <div>
      {cart.map((product) => {
        return (
          <>
            <img width={200} height={200} src={product.image}></img>
            <h1>{product.title}</h1>
            <h2>x{product.qty}</h2>
            <h2>${product.price}</h2>
            <button onClick={()=> removeItem(product.id)}>Remover Producto</button>
          </>
        );
      })}
        <div>
          <button onClick={() => emptyCart()}>Vaciar Carro<FaTrashAlt/></button>
          <h2>${total}</h2>
          <button onClick={()=>navigate('/checkout')}>Terminar Compra</button>
        </div>
      </div>}
    </div>
  );
};

export default Cart;
