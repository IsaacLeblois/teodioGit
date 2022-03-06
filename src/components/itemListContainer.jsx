import React from 'react'
import { useEffect, useState } from 'react'
import ItemList from './itemList'
import "./item.css"

const DataBase = () => [
    {
        id: 1,
        name: "A380-800",
        manufacturer: "Airbus",
        price: 338.4,
        imgurl: "https://upload.wikimedia.org/wikipedia/commons/0/09/A6-EDY_A380_Emirates_31_jan_2013_jfk_%288442269364%29_%28cropped%29.jpg"
    },
    {
        id: 2,
        name: "B747-8",
        manufacturer: "Boeing",
        price: 306.2,
        imgurl: "https://upload.wikimedia.org/wikipedia/commons/a/ab/D-ABYL_Lufthansa_B748_FRA_%2850549824683%29.jpg"
    },
    {
        id: 3,
        name: "An124",
        manufacturer: "Antonov",
        price: 82.6,
        imgurl: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Antonov_An-124-100_Ruslan%2C_Antonov_Airlines_JP6355463.jpg"
    }
]

function getData() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(DataBase)
        }, 2000)
    })
}

function ItemListContainer(props) {
    const [planes, setPlanes] = useState([])

    useEffect( () => {
        let requestDatos = getData()

        requestDatos
        .then(((datosResolve) => {
            setPlanes(datosResolve)
        }), [])
    })

    return (
        <div className='appContent'>
            <h2 className='m-4'>{props.greeting}</h2>
            <ItemList data={planes} />
        </div>
    )
}

export default ItemListContainer