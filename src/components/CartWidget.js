import React from 'react'
import { useCartContext } from '../CartContext'

function CartWidget() {
  const {totalProducts} = useCartContext()

  return (
    <>
      <i><img src='/carrito.png' style={{width: '30px', height: '30px'}} alt='carrito'/></i>
      <span>{totalProducts()||''}</span>
    </>
  )
}

export default CartWidget