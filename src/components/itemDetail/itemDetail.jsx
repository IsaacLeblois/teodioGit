import React, { useState } from 'react'
import ItemCount from '../itemCount/itemCount'
import { useContext } from 'react'
import CartContext from '../context/cartContext'

function ItemDetail(props) {
  const { addItem } = useContext(CartContext)

  const [ isInCart, setIsInCart ] = useState(false)

  function addToCart(qty){
    addItem(props, qty)
    setIsInCart(true)
  }

  return (
    <div className="cardDetail">
        <img src={props.imgurl} />
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.manufacturer}</p>
            <p className="precio">${props.price} millones de USD.</p>
        </div>
        { isInCart ?
            <button>Terminar compra</button>
            :
            <ItemCount addToCart={addToCart} stock={props.stock} />
        }
    </div>
  )
}

export default ItemDetail