import React from 'react'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import Loader from './Loader'



function ItemDetailContainer() {

  const [data, setData] = useState([])
  const { detalleId } = useParams()
  const [loading, setLoading] = useState(false)



  useEffect(() => {

    setLoading(true)
    const queryCollection = getFirestore()
    const queryDoc = doc(queryCollection, 'productos', detalleId)
    getDoc(queryDoc)
      .then(res => setData({ id: res.id, ...res.data() }))
      .finally(() => setLoading(false))


  }, [detalleId])

  return (
    <>
      {loading && <Loader></Loader>}
      <ItemDetail data={data}></ItemDetail>
    </>
  )
}

export default ItemDetailContainer