import { useState } from "react"

export default function ItemCount({stock, addToCart}) {
    const [count, setCount] = useState(1)

    function suma(){
        if (count < stock) setCount(count+1)
    }

    function resta(){
        if (count > 1) setCount(count-1)
    }

    return (
    <div>
        <h2>ItemCount</h2>
        <div className="container">
            <button onClick={resta}>  -  </button>
            <span className="m-3">{count}</span>
            <button onClick={suma}>  +  </button>
        </div>
        <button onClick={addToCart} className="btn btn-danger m-2">Agregar al carrito</button>
        <p>Stock disponible: {stock}</p>
    </div>
    )
}