import React, { useState } from "react";
import "./ItemCounter.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart }  from "@fortawesome/free-solid-svg-icons";

const ItemCounter = (props) => {
    const [ clicks, setClicks ] = useState(1);
    const { stock, onConfirm } = props;

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
                onClick={onConfirm}
                disabled={stock === 0}
            > <h3> Meter en el <FontAwesomeIcon icon={ faShoppingCart } /> </h3> </button>
        </>
    )
}

export default ItemCounter;