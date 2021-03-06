import React, { useState } from 'react'
import ItemCount from '../itemCount/itemCount'
import { useContext } from 'react'
import CartContext from '../context/cartContext'
import { Link } from 'react-router-dom'

function ItemDetail(props) {
  const { addItem, clearCart } = useContext(CartContext)

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
            <Link to="/cart" >Terminar compra</Link>
            :
            <ItemCount addToCart={addToCart} stock={props.stock} />
        }
    </div>
  )
}

export default ItemDetail