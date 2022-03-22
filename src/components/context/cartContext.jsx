import { createContext, useState } from "react"

const CartContext = createContext()

export function CartContextProvider({ children }) {
    const [itemsCart, setItemsCart] = useState([])

    function addItem(item, qty) {
        if(isItemInCart(item.id)){
            let index = itemsCart.findIndex(i => i.id === item.id)
            let copyCart = [...itemsCart]
            copyCart[index].qty += qty
            setItemsCart(copyCart)
        }
        else{
            const itemToAdd = { ...item, qty}
            setItemsCart( [...itemsCart, itemToAdd] )
        }
    }

    function clearCart() {
        setItemsCart([])
    }

    function isItemInCart(id) {
        return itemsCart.some( cadaitem => cadaitem.id === id)
    }

    return (
        <CartContext.Provider value={ {addItem, itemsCart, clearCart} }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext