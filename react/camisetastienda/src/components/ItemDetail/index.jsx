import React, {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import ItemCount from '../ItemCount'
import { Shop } from "../../context/ShopProvider";
import './styles.css'

const ItemDetail = ({product}) => {

  const [quantity, setQuantity] = useState(0)
  const navigate = useNavigate()

  const {addItem} = useContext(Shop)


  const addCart = (qty) =>{
    setQuantity(qty)
  }

  const handleFinish = () =>{
    const productToSave = {...product, qty:quantity}
    addItem(productToSave)
    navigate('/cart')
  }

  return (
    <div className='container-itemdetail'>
        <img src={product.image} alt="" className='container-itemdetail-img'/>
        <h2 className='container-itemdetail-title'>{product.title}</h2>
        <h2 className='container-itemdetail-description'>{product.description}</h2>
        <h2 className='container-itemdetail-price'> ${product.price}</h2>
        { !quantity ? <ItemCount stock={10} initial={1} onAdd={addCart}/> : <button onClick={handleFinish}>Finalizar Compra</button> }
    </div>
  )
}

export default ItemDetail