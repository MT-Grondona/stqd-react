import React from 'react'
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import Cart from './Cart';
import { Routes, Route } from 'react-router-dom';
import Brief from './Brief';

function Main() {
    return (
        <Routes>
            <Route path='/' element={<ItemListContainer texto='Maria' />}></Route>
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />}></Route>
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/brief' element={<Brief />}></Route>
            <Route path='*' element={<h1>404</h1>}></Route>
        </Routes>
    )
}

export default Main