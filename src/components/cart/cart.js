import CartContext from "../context/cartContext"
import { useContext } from 'react'
import { Link } from 'react-router-dom'

function CartView() {
    const { removeItem, itemsCart, clearCart, getTotalPrice } = useContext(CartContext)

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
                <button onClick={clearCart} className="btn btn-danger"> Vaciar carrito </button>
            </div>
        )
    }
}

export default CartView