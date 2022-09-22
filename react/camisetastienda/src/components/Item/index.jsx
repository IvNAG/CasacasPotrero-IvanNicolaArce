import React from 'react'
import './styles.css'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Item = ({product}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/detail/${product.id}`)
  }
  return (
    <Card className='card-container' onClick={handleNavigate}>
      <Card.Img variant="top" className="card-img" src={product.image} />
      <Card.Body>
        <Card.Title className='card-title'>{product.title}</Card.Title>
        <Card.Text className='card-title'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
  
}

export default Item