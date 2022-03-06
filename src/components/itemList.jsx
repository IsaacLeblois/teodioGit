import React from 'react'
import Item from './item'
import "./item.css"

function ItemList({data}) {
  return (
    <div className='planeCards'>
        {data.map( (plane) =>{
            return <Item
                id={plane.id}
                name={plane.name}
                manufacturer={plane.manufacturer}
                price={plane.price}
                imgurl={plane.imgurl}
            />
        })}
    </div>
  )
}

export default ItemList