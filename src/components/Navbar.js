import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'



function Navbar() {
  return (
    <nav id='navbar' className=' navbar shadow-slate-800  flex justify-between p-4 font-serif  font-normal mb-5 bg-rose-100 text-black' >
  <NavLink  className='text-3xl text-decoration-none text-black '  to= '/'>Solo te quiero dulce</NavLink>
  <nav className='text-2xl flex justify-evenly w-1/2 font-serif  font-normal   bg-rose-100 text-black' >
      <NavLink className="text-decoration-none text-black" to= '/categoria/chocolate'>Tortas chocolate</NavLink>
      <NavLink className="text-decoration-none text-black" to= '/categoria/frutales'>Tortas frutales</NavLink>
      <NavLink  to= '/cart'>
        <CartWidget></CartWidget>
      </NavLink>
      </nav>
  </nav>
  )
}

export default Navbar


