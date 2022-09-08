import React from 'react'
import './styles.css'
import ItemCount from "../ItemCount";
import Card from 'react-bootstrap/Card';

const Item = ({product}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>{product.price}</Card.Text>
        <ItemCount/>
      </Card.Body>
    </Card>
  )
  
}

export default Item