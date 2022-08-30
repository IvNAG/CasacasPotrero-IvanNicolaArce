import React, {useState} from 'react'
import './styles.css'
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';



const ItemCount = ({stock, initial, onAdd}) => {

  const [count, setCount] = useState(initial);

  const handleAdd = () => {
    if(count < stock){
      setCount(count+1)
    }else{
      console.log("No hay stock suficiente")
    }
  }

  const handleDecrement = () =>{
      if(count >= 1){
        setCount(count-1)
      }else{
        console.log("Se necesita al menos 1 producto para agregar al carrito de compras")
      }
  }

  return (
  <Stack direction="horizontal" gap={3} className="count" >
        <Button variant="danger"  onClick={handleDecrement}>-</Button> 
        <h2>{count}</h2>
        <Button variant="success" onClick={handleAdd}>+</Button> 
        <Button variant="warning" onClick={() =>onAdd(count)}>Añadir al carrito</Button> 
  </Stack>
  );
}

export default ItemCount
