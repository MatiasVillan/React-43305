import { useState, createContext } from "react";

const cartContext = createContext({ cart: [] });

const CartContextProvider = (props) => {

    const [ cart, setCart ] = useState([]);

    const isInCart = (id) => {
        return cart.some( (item) => item.id === id );
    }

    const getItemInCart = (id) => {
        console.log("item in cart ", id, cart)
        console.log("LOOK HERE", cart.find( (item) => item.id == id ));
        return cart.find( (item) => item.id == id );
    }

    const removeItem = (id) => {
        setCart( cart.filter( (item) => item.id !== id ));
    }

    const clearCart = () => {
        setCart( [] );
    }

    const getTotalItemsInCart = () => {
        let count = 0;

        cart.forEach( (item) => {
            count += item.count;
        });

        return count;
    }

    const getTotalPrice = () => {
        let price = 0;

        cart.forEach( (item) => {
            price = item.price * item.count;
        });

        return price;
    }

    const addToCart = (product, count) => {
        const newCart = [...cart];

        if ( isInCart(product.id) ) {
            const index = cart.findIndex( (item) => item.id === product.id );
            newCart[index].count += count;
            setCart(newCart);

        } else {
            const newItemInCart = { ...product, count };
            newCart.push(newItemInCart);
            setCart(newCart);
        }
    }
    
    return (
        <cartContext.Provider
            value={{
                cart,
                getItemInCart,                
                addToCart,
                removeItem,
                clearCart,
                getTotalItemsInCart,
                getTotalPrice,       
            }}>
            {props.children}
        </cartContext.Provider>
    );
}

export { cartContext, CartContextProvider };