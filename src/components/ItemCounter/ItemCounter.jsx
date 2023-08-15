import React, { useState } from "react";
import "./ItemCounter.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSortNumericDownAlt }  from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ItemCounter = (props) => {
    const [ clicks, setClicks ] = useState(1);
    const { stock, maxStock, handleAddToCart } = props;

    const handleAddClick = () => {
        if ( clicks < stock )
            setClicks( clicks + 1 );
    }

    const handleSubClick = () => {
        if ( clicks > 1 )
            setClicks( clicks - 1 )    
    }

    return (
        <>
            <div className="item-count-container">
                <button className="item-count-button"
                    disabled={stock === 0}
                    onClick={handleSubClick}
                > - </button>
                <h2> {clicks} </h2>
                <button className="item-count-button"
                    disabled={stock === 0}
                    onClick={handleAddClick}
                > + </button>
            </div>
            <button className="item-count-button"
                onClick={ () => handleAddToCart(clicks) }
                disabled={ stock === 0 || clicks > stock }
                > <h3> Meter en el <FontAwesomeIcon icon={ faShoppingCart } /> 
            </h3> </button>
            <Link to="/cart"><button className="item-cart-button"> <h3> Ir al <FontAwesomeIcon icon={ faShoppingCart } /> </h3> </button></Link>
            <div>
                <h4>Tenés {maxStock - stock} de este artículo en el carrito.</h4>
                <small>Stock disponible: {maxStock}</small>
            </div>
        </>
    )
}

export default ItemCounter;