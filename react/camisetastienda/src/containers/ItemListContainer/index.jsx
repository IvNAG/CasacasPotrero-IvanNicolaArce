import React from 'react'
import './styles.css'
import ItemCount from '../../components/ItemCount'


const ItemListContainer = ({greeting}) => {

    const agregarAlCarrito = (cantidad) =>{
      console.log(`Se agregaron ${cantidad} al carrito.`)
  }
  return (
    <div>
        <p className='ItemListContainer'>{greeting}</p>
        <ItemCount initial={1} stock={5} onAdd={agregarAlCarrito}/>
    </div>
  )
}

export default ItemListContainer;