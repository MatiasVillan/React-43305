import React, { useContext }  from "react";
import { cartContext } from "../../context/cartContext";
import Cart from "./Cart";

const CartContainer = () => {
    const { cart, removeItem, getTotalPrice, clearCart } = useContext(cartContext);

    const price = getTotalPrice();

    return <Cart cart={cart} remover={removeItem} price={price} cleaner={clearCart}/>;
}

export default CartContainer;