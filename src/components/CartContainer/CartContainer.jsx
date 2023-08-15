import React, { useContext }  from "react";
import { cartContext } from "../../context/cartContext";
import { Link, useNavigate } from "react-router-dom";
import Cart from "./Cart";

const CartContainer = () => {
    const { cart, removeItem, getTotalPrice } = useContext(cartContext);

    const price = getTotalPrice();

    return <Cart cart={cart} remover={removeItem} price={price} />;
}

export default CartContainer;