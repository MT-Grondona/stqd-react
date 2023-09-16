import React from 'react'
import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';





function Form() {

  const [data, setData] = useState({

    name: '',
    email: '',
    phone: '',
    message: ''

  })


  const handleImputChange = (event) => {
    setData({


      ...data,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }



  return (
    <>
    
      <Fragment>
        <h2 className='mt-5 mb-5 text-center text-black font-weight-bold' style={{ fontSize: '40px' }}>Formulario de contacto</h2>
        <form onSubmit={handleSubmit} className='row' action='https://formspree.io/f/mbjqkdjn' method='POST'>
          <div className='col-md-4 m-10'>
            <div><h4>Nombre y apellido: </h4>
              <input type='text' name='name' placeholder='Ingrese su nombre ' onChange={handleImputChange}></input>              
            </div>
            <div>
            <h4>Email: </h4>
              <input type='email' name='email' placeholder='Ingrese su mail' onChange={handleImputChange}></input>
            </div>
            <div>
              <h4>Teléfono de contacto: </h4>
              <input type='text' name='phone' placeholder='Ingrese tu teléfono' onChange={handleImputChange}></input>
            </div>
          </div>
          <div className='col-md-4 m-10'>
            <h4>Mensaje o comentarios sobre el pedido </h4>
            <textarea name='message' placeholder='Deje su mensaje aqui' onChange={handleImputChange}></textarea>
          </div>
          <div className='col-md-12 m-10'>
          <Button variant="outline-danger"type='submit' value='Enviar'>
              <Link className='text-decoration-none text-black' to='/brief'>Confirmar pedido</Link></Button>
            <input type='text'></input>
          </div>
        </form>
        </Fragment> 
    </>
  )
}

export default Form