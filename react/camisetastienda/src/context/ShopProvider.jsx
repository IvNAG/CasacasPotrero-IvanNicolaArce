import React, { useState } from 'react'
import { useContext } from 'react';
import { createContext } from "react";


export const Shop = createContext();

const ShopProvider = ({children}) => {
    
    const [cart, setCart] = useState([])

    const addItem = (item) => {

        const productoRepetido = isInCart(item.id);
        // console.log(productoRepetido);
        if (productoRepetido) {
            const cartModified = cart.map(product => {
                if (product.id === item.id) {
                    product.qty += item.qty
                    return product
                }
                return product
            })
            setCart(cartModified)
        } else {
            const cartModificado = [...cart, item]
            setCart(cartModificado)
        }

    }

    const isInCart = (id) => {
        return cart.some(product => product.id === id)
    }

    const emptyCart = () =>{
        setCart([])
    }
    
    const removeItem = (id) => {
        setCart(cart.filter((product) => product.id !== id ))
    }

    const cartQuantity = () => {
        return cart.reduce((acc, product) => acc += product.qty,0)
    }

    const cartTotal = () =>{
        return cart.reduce((acc, product) => acc += product.price * product.qty, 0)
    }

    return (
        <Shop.Provider value={{ cart, addItem, isInCart, removeItem , emptyCart, cartQuantity ,cartTotal}}>
            {children}
        </Shop.Provider>
    )
}
export const useCart = () => useContext(Shop)
export default ShopProvider;


