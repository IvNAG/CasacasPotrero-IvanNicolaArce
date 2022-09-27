import React from 'react'
import {RiShoppingCartFill} from 'react-icons/ri'
import './styles.css'
import Badge from 'react-bootstrap/Badge';
import {Link} from 'react-router-dom'
import { useCart } from '../../context/ShopProvider'

const CartWidget = () => {
    const{cartQuantity} = useCart();
    return (
        <div>
            <Link><RiShoppingCartFill className='icon-Cart'/>
                <Badge pill bg="danger">{cartQuantity() || ''}</Badge>{' '}
            </Link>
        </div>
    )
}

export default CartWidget