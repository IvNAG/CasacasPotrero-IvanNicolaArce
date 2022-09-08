import React from 'react'
import ItemCount from '../ItemCount'
import './styles.css'

const ItemDetail = ({product}) => {
  return (
    <div className='container-itemdetail'>
        <img src={product.image} alt="" className='container-itemdetail-img'/>
        <h2 className='container-itemdetail-title'>{product.title}</h2>
        <h2 className='container-itemdetail-description'>{product.description}</h2>
        <h2 className='container-itemdetail-price'> ${product.price}</h2>
        <ItemCount/>
    </div>
  )
}

export default ItemDetail