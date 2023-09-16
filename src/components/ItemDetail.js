import React from 'react'
import ItemsCount from './ItemsCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from './../CartContext'
import Button from 'react-bootstrap/Button';

function ItemDetail({ data }) {

  const [goToCart, setGoToCart] = useState(false)
  const {addProduct}= useCartContext()



  const onAdd = (quantity) => {
    setGoToCart(true)
addProduct(data,quantity)
  }


  return (
    <div className="text-center">
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      <img className='mx-auto mb-3' 
      src={data.image} style={{ width: '400px', height: 'auto' }} alt='' />
      {
        goToCart ?
        <div>
          <Button variant="outline-dark m-2">
          <Link className="text-decoration-none text-gray-600" to='/'>Seguir comprando</Link>
          </Button>
          <Button variant="outline-danger m-2">
          <Link className="text-decoration-none text-gray-600" to='/cart'>Terminar compra</Link>
          </Button>
        </div>
           :

          <ItemsCount initial={1} stock={5} onAdd={onAdd}></ItemsCount>
      }
    </div>
  )
}

export default ItemDetail