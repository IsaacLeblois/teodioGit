import React from 'react'
import { Link } from 'react-router-dom'
import "./item.css"

export default function Item(props) {
  return (
    <div className="card">
        <img src={props.imgurl} />
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.manufacturer}</p>
            <Link to={ `/item/${props.id}` } className="btn btn-dark btnPrice">{props.price} Mill. de USD</Link>
        </div>
    </div>
  )
}
