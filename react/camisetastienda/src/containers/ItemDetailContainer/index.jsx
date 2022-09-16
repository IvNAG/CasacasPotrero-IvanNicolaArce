import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import ItemDetail from '../../components/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [ productDetail , setProductDetail] = useState([])

    const productId = useParams();
    console.log(productId);
        
        useEffect(()=>{
        const getProducts = async() =>{
            try{
                const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
                const data = await response.json();
                setProductDetail(data);
            }catch{
                console.log("error");
            }
        }
        getProducts();
    }, [productId])
    console.log(productDetail);
    return (
        <ItemDetail product={productDetail}/>
  )
}

export default ItemDetailContainer