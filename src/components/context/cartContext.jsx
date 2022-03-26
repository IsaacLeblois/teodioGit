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

    function countItemsinCart() {
        let totalItems = 0;
        itemsCart.forEach( item=> totalItems+= item.qty )
        return totalItems
    }

    function getTotalPrice() {
        let totalPrice = 0
        itemsCart.forEach( item=> totalPrice += item.qty * item.price )
        return totalPrice
    }

    function isItemInCart(id) {
        return itemsCart.some( cadaitem => cadaitem.id === id)
    }

    function removeItem(idDelete){
        setItemsCart(itemsCart.filter( item=> item.id !== idDelete ))
    }

    return (
        <CartContext.Provider value={ {addItem, itemsCart, clearCart, countItemsinCart, getTotalPrice, removeItem} }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext