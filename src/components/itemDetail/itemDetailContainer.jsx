import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './itemDetail'
import { getAllPlanes } from '../firebase/firebaseClient'

function ItemDetailContainer(props) {
    const [plane, setPlane] = useState([])
    const { id } = useParams()

    useEffect( () => {
        let requestDatos = getAllPlanes(id)

        requestDatos
        .then(((datosResolve) => {
            setPlane(datosResolve)
        }), [id])
    })

    return (
        <div>
            <h2 className='m-4'>{props.greeting}</h2>
            <ItemDetail
                id={plane.id}
                name={plane.name}
                manufacturer={plane.manufacturer}
                price={plane.price}
                imgurl={plane.imgurl}
                stock={plane.stock}
            />
        </div>
    )
}

export default ItemDetailContainer