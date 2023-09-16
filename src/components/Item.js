import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function Item({ info }) {
  
  return (
    <Link className='text-decoration-none'  to={`/detalle/${info.id}`} >
    <Card  className='m-10'style={{ width: '18rem' }}>
      <Card.Img variant='top' src={info.image} style={{ width: '300px', height: 'auto' }} />    
      <Card.Title className= 'text-center mt-5'>{info.name}</Card.Title>
        <Button className='m-4' variant='danger'>Ver más       
        </Button>
    </Card>
    </Link>
  );
}

export default Item;