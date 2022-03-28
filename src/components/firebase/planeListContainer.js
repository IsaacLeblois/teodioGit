import { getFirestore, collection, getDocs } from 'firebase/firestore'
import './firebaseClient'
import React, { useEffect, useState } from 'react'

const PlaneListContainer = () => {

  const [products, setProducts] = useState([])

  useEffect( async () => {
    const db = getFirestore()

    const querySnapshot = await getDocs(collection(db, "items"))

    let listaDeProductos = []

    querySnapshot.forEach((doc) => {
    //  console.log(`${doc.id} => ${doc.data()}`)
        console.log(doc.data())
        listaDeProductos.push(doc.data())
    })

    setProducts(listaDeProductos)
  }, [])
  
  return (
    <>
    <div>planeListContainer</div>
    {products.map( p => <PlaneCard plane={p} /> )}
    
    </>
  )
}

const PlaneCard = ({plane}) => {
  return (
    <>
    <div>{plane.Nombre}</div>
    <div>Precio: {plane.Precio} M. de USD</div>
    <div>Stock: {plane.Stock}</div>
    </>
  )
}

export default PlaneListContainer