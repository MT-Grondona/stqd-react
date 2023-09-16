import { useCartContext } from '../CartContext'
import { Link } from 'react-router-dom'
import ItemCart from './ItemCart'
import Form from './Form'
import Button from 'react-bootstrap/Button';


function Cart() {

  const { cart, totalPrice } = useCartContext()

  if (cart.length === 0) {
    return (
      <div className='m-10 text-center'>
        <h2>El carrito esta vacío</h2>
        <Button  clasName='btn btn-outline-danger ml-20'  variant='outline-danger'>
        <Link  className='text-decoration-none text-black' to='/'>Hacer compra</Link>
        </Button>
      </div>
    )
  }

  return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }
      <h3 className='m-10 '>
        Total:$ {totalPrice()}
      </h3>
      <Form></Form>
    </>

  )

}
export default Cart