import React from 'react'

function ItemDetail(props) {
  return (
    <div className="cardDetail">
        <img src={props.imgurl} />
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.manufacturer}</p>
            <p className="precio">${props.price} millones de USD.</p>
            <a className='btn btn-danger btnPedir'>Pedir ahora</a>
        </div>
    </div>
  )
}

export default ItemDetail