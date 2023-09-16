import { useCartContext } from '../CartContext'


function Brief() {

  const { totalPrice } = useCartContext()

  return (
    <div className="text-center">
      <h2>Gracias por su compra</h2>
      <p>Su pedido se ha realizado con exito</p>
      <h3>Usted a pagado un total de $ {totalPrice()} por su pedido </h3>
    </div>
  )
}

export default Brief