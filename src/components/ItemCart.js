import React from 'react'
import { useCartContext } from '../CartContext'



function ItemCart({ product }) {

  const { removeProduct } = useCartContext()

  return (
    <>
    <table className='col-xl-8'>
      <tr>      
      <td>
      <img className='ml-20' src={product.image} alt='' width='150' height='auto' />
      </td>
      <td>
        <h2 >{product.name}</h2>
        <h4>Cantidad:{product.quantity}</h4>
        <p>Precio por unidad:${product.price}</p>
        <p>Subtotal:$ {product.price * product.quantity}</p>
        <button className='btn btn-danger p-2 ' onClick={() => removeProduct(product.id)}>Eliminar</button>
        </td>
        </tr>
        </table>
    </>
  )
}

export default ItemCart