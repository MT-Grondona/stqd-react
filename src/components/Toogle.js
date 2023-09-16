import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';




function Toogle() {

    const [show, setshow] = useState(true)

    const toogleMenu = () => {
        setshow(!show)
    }

    if (show) {
        return (
            <div>
                <Button className='m-3' onClick={toogleMenu} variant='outline-dark'>
                    <img
                        src='/menuHamburguesa.png' width='15'
                        height='auto' alt='' />
                </Button>
            </div>
        )
    }
    else {
        return (
            <div>
                <Card style={{ width: '16rem' }}>
                    <Card.Body>
                        <Card.Title><Button onClick={toogleMenu} variant='outline-dark'>
                            <img src='/menuHamburguesa.png' width='15'
                                height='auto' alt='' />
                        </Button></Card.Title>
                    </Card.Body>
                    <ListGroup className='list-group-flush shadow-md p-2 rounded-md duration-300 transition hover:scale-110 '>
                        <ListGroup.Item>Tortas</ListGroup.Item>
                        <ListGroup.Item>Cuadrados dulces</ListGroup.Item>
                        <ListGroup.Item>Eventos</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        )
    }
}

export default Toogle