import React, {useState, useEffect} from 'react'
import './styles.css'
import ItemList from '../../components/ItemList'


const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([])

  useEffect(()=> {
    
    (async ()=> {
    // const obtenerProductos = new Promise ((accept, reject)=> {
    //     setTimeout(()=> {
    //       accept(products)
    //     }, 1000);
    //   })
        try {
          const response = await fetch("https://fakestoreapi.com/products");
          const productos = await response.json();
          setProductos(productos);
        } catch (error) {
          console.log(error);
        }
      })()
  }, [])


    
  return (
    <div>
        <p className='ItemListContainer'>{greeting}</p>
        <ItemList products={productos}/>
    </div>
  )
}

export default ItemListContainer;