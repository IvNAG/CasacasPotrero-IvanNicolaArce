import React, {useState, useEffect} from 'react'
import './styles.css'
import ItemList from '../../components/ItemList'
import { useParams } from 'react-router-dom'
import MoonLoader from 'react-spinners/MoonLoader'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'


const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  
  const {categoryId} = useParams();

  useEffect(()=>{
    setLoading(true)
    const coleccionProductos = categoryId ? query(collection(db,"products"), where("category", "==", categoryId)) : collection(db, "products")
    getDocs(coleccionProductos)
    .then((result)=>{
      const lista = result.docs.map((producto)=>{
        return{
          id:producto.id,
          ...producto.data()
        }
      })
      setProductos(lista)
    })
    .catch((error)=> console.log(error))
    .finally(()=>setLoading(false))
  }, [categoryId])
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