import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { useCart } from '../../context/ShopProvider'
import { db } from '../../firebase/config'
import { useNavigate } from 'react-router-dom'

const CheckOut = () => {
  const {comprador, setComprador} = useState({})
  const {cart, cartTotal, emptyCart} = useCart()
  const [orderId,setOrderId] = useState('')
  const [mensaje, setMensaje] = useState(false)

const navigate = useNavigate()


  const datosComprador = (e)=> {
    setComprador({
      ...comprador,
      [e.target.name]:e.target.value
    })
  }

  const finalizarCompra = (e) =>{
    e.preventDefault()
    if(Object.values(comprador).length !== 3){
      setMensaje(true)
    }else{
      setMensaje(false)
      const ventas = collection(db,"orders")
      addDoc(ventas, {
        comprador,
        items:cart,
        total:cartTotal,
        date:serverTimestamp()
      })
      .then((res)=>{
        setOrderId(res.id)
        emptyCart()
      })
      .catch((error) => console.log(error))
    }
  }
    return (
    <div>
        {!orderId ? 
        <div>
        <h2>Checkout</h2>
        <h4>Completar los siguientes campos para completar la compra.</h4>
        <form onSubmit={finalizarCompra}>
            <input type="text" placeholder='Nombre y Apellido' name='name' onChange={datosComprador}/>
            <input type='number' placeholder='011121341' name='phone' onChange={datosComprador}/>
            <input type='email' placeholder='example@gmail.com' name='email' onChange={datosComprador}/>
            <button>Finalizar Compra</button>
            {mensaje && <p>Por favor complete todos los campos</p>}
        </form>
        </div>
        :
        <div>
          <h2>Muchas Gracias por su compra!</h2>
          <h4>Su orden es: {orderId}</h4>
          <button onClick={()=>navigate('/')}>Volver</button>
        </div>}
    </div> 
    )
  }

export default CheckOut