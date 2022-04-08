import React from 'react'
import { useEffect, useState } from 'react'
import ItemList from './itemList'
import "./item.css"

function ItemBoeingContainer(props) {
    const [planes, setPlanes] = useState([])

    useEffect( () => {
        let requestDatos = getCategory("Boeing")

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

export default ItemBoeingContainer