import React from 'react'
import { useEffect, useState } from 'react'
import ItemList from './itemList'
import "./item.css"
import { getCategory } from './firebase/firebaseClient'

function ItemAirbusContainer(props) {
    const [planes, setPlanes] = useState([])

    useEffect( () => {
        let requestDatos = getCategory("Airbus")

        requestDatos
        .then( datosResolve => {
            setPlanes(datosResolve)
        }) 
    }, [])

    return (
        <div className='appContent'>
            <h2 className='m-4'>{props.greeting}</h2>
            <ItemList data={planes} />
        </div>
    )
}

export default ItemAirbusContainer