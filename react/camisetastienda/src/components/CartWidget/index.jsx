import React from 'react'
import {RiShoppingCartFill} from 'react-icons/ri'
import './styles.css'

const CartWidget = () => {
    return (
        <div>
            <a href="#home"><RiShoppingCartFill className='icon-Cart'/></a>
        </div>
    )
}

export default CartWidget