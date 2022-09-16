import React from 'react'
import './styles.css'
import ItemCount from "../ItemCount";
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Item = ({product}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/detail/${product.id}`)
  }
  return (
    <Card style={{ width: '18rem' }} onClick={handleNavigate}>
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