import React from 'react'
import { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';



function ItemsCount({initial,stock, onAdd}) {
    const [count, setCount] = useState(parseInt(initial))
    


    const decrease = () => {
        setCount(count - 1)

    }

    const increase = () => {
        setCount(count + 1)
    }

useEffect(() => {
    setCount(parseInt(initial))
},[initial])

    return (
        <div >
             <Button variant="outline-dark"disabled={count <= 1}
                onClick={decrease}> -</Button>
            <span className="m-2"> {count} </span>
            <Button variant="outline-dark"disabled = {count >= stock} onClick={increase} > +</Button>
            <div className="mt-2">
            <Button variant="outline-danger"disabled={stock<=0} onClick={()=> onAdd(count)}>
                    Agregar al carrito</Button>
            </div>
        </div>
    )
}

export default ItemsCount