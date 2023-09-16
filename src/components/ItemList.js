import React from 'react'
import Item from './Item'

function ItemList({data =[]}) {
  return (
        data.map(torta => 
        <Item  key={torta.id} info ={torta}/>
            )
  )
}

export default ItemList