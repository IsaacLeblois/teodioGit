import CartContext from "../context/cartContext"
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { sendOrder } from "../firebase/firebaseClient"

function CartView() {
    const { removeItem, itemsCart, clearCart, getTotalPrice } = useContext(CartContext)
    const [orderDone, setOrderDone] = useState(false)

    function handleSendOrder(){
        sendOrder({
            items: itemsCart,
            buyer: {nombre: "Isaac", email: "isaacleblois@gmail.com"}
        })

        let ordenRespuesta = sendOrder()
        setOrderDone(ordenRespuesta)
    }

    if (orderDone) {
        return (
            <div className="container mt-5 mb-5">
                <h1>¡Gracias!</h1>
                <p>Eres muy importante para nosotros.</p>
            </div>
        )
    }

    if(itemsCart.length === 0){
        return (
            <div className="container mt-5 mb-5">
                <h2>No hay elementos en el carrito.</h2>
                <p>¡Te invitamos a agregar algun producto!</p>
                <Link to="/" type="button" className="btn btn-danger">Ir al catalogo</Link>
            </div>
        )
    }
    else {
        return (
            <div className="container">
                <h1>Carrito de compras</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Fabricante</th>
                            <th>Precio</th>
                            <th>Vista Previa</th>
                            <th>Total a pagar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemsCart.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.manufacturer}</td>
                                    <td>{item.qty}</td>
                                    <td>${item.price}M.</td>
                                    <td>${(item.qty * item.price).toFixed(2)}M.</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <button onClick={clearCart} className="btn btn-danger m-2"> Vaciar carrito </button>
                <button onClick={handleSendOrder} className="btn btn-dark m-2"> Realizar pedido </button>
            </div>
        )
    }
}

export default CartView