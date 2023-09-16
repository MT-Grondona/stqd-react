import React from 'react'
import Title from './Title'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import Loader from './Loader'


function ItemListContainer({ texto }) {
  const [data, setData] = useState([])
  const { categoriaId } = useParams()
  const [loading, setLoading] = useState(false)


  useEffect(() => {

    setLoading(true)
    const querydb = getFirestore()
    const queryCollection = collection(querydb, 'productos')

    if (categoriaId) {
      const queryFilter = query(queryCollection, where('categoria', '==', categoriaId))
      getDocs(queryFilter)
        .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        .finally (() => setLoading(false))  
      } else {
      getDocs(queryCollection)
        .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        .finally (() => setLoading(false)) 
    }
  }, [categoriaId])




  return (
    <>
      {loading && <Loader></Loader>}
      <Title greeting={texto}></Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 2xl:grid-cols-6 ">
      <ItemList  data={data} ></ItemList>
      </div>
    </>
  )
}

export default ItemListContainer