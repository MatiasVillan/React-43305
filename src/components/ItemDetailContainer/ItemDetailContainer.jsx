import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import getData, { getGenreList, getItemDetails } from '../../Services/MockService';
import { cartContext } from '../../context/cartContext';

const ProcessItemDetails = (itemId) => {
    const [ disc, setDisc ] = useState([]);
    const [ isInCart, setIsInCart ] = useState(false);
    const { addToCart, getItemInCart } = useContext(cartContext);

    const getDetails = async () => {
        const details = await getItemDetails(itemId);
        setDisc(details);
    }

    useEffect(() => {
        getDetails();
    }, [] );

    const itemInCart = getItemInCart(itemId);
    const realStock = isInCart 
        ? disc.stock - itemInCart.count
        : disc.stock; 

    const handleAddToCart = (clicks) => {
        addToCart(disc, clicks);
        alert(`Agregaste ${clicks} al carrito.`);
        setIsInCart(true);
    }

    return ItemDetail(disc, realStock, handleAddToCart);
}

const ItemDetailContainer = () => {
    const {itemId} = useParams();
    let discDetails = "";

    const isBetween = (value, min, max) => {
        if (!Number(value)) {
          return false;
        }
        return value >= min && value <= max;
    }

    if( isBetween(itemId, 1, 20) ) {
        discDetails = ProcessItemDetails(itemId);
        
    } else {
        discDetails = (<h1>Error 404, Página no encontrada.</h1>);
    }

    return discDetails;
}

export default ItemDetailContainer;