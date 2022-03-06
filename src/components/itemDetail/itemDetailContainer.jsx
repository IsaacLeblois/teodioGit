import React from 'react'
import { useEffect, useState } from 'react'
import ItemDetail from './itemDetail'

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

function ItemDetailContainer(props) {
    const [plane, setPlane] = useState([])

    useEffect( () => {
        let requestDatos = getData()

        requestDatos
        .then(((datosResolve) => {
            setPlane(datosResolve)
        }), [])
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
            />
        </div>
    )
}

export default ItemDetailContainer