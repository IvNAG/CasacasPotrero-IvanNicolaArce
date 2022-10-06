import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {db} from '../../firebase/config'
import ItemDetail from '../../components/ItemDetail'
import { useParams } from 'react-router-dom'
import { collection,doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [ productDetail , setProductDetail] = useState([])
    const {productId} = useParams();


    useEffect(()=>{
        const collectionProd = collection(db, "products")
        const referenciaDoc = doc(collectionProd, productId)
        getDoc(referenciaDoc)
        .then((result)=>{
            setProductDetail({
                id:result.id,
                ...result.data()
            })
        })
        .catch((error) => console.log(error))
    })
        
        
    return (
        <ItemDetail product={productDetail}/>
  )
}

export default ItemDetailContainer