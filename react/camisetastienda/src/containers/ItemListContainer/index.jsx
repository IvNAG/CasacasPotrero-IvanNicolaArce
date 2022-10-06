import React, {useState, useEffect} from 'react'
import './styles.css'
import ItemList from '../../components/ItemList'
import { useParams } from 'react-router-dom'
import MoonLoader from 'react-spinners/MoonLoader'


const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  
  const {categoryId} = useParams();
  // console.log(categoryId);
  useEffect(()=> {
    
    (async () => {
      try {
          if (categoryId){
            const response = await fetch(
              "https://fakestoreapi.com/products/category/" + categoryId
          );
          const productos = await response.json();
          setProductos(productos);
          }
          else {
            const response = await fetch(
                "https://fakestoreapi.com/products"
            );
            const productos = await response.json();
            setProductos(productos);
            setLoading(false)
          }
      } catch (error) {
          console.log('No se recibio');
      }
  })();
}, [categoryId]);


  const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  color:"red"
  };
  return (
    <>
    {loading == false ? <ItemList products={productos}/>:<div>
    <MoonLoader color={"red"} loading={loading} cssOverride={override} size={150} aria-label="Loading Spinner" />
      </div>}
    </>
  )
      
};

export default ItemListContainer;