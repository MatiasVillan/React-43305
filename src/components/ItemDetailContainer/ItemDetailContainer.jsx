import { useState, useEffect } from 'react';
import { getItemDetails } from '../../services/MockService';
import { useParams } from 'react-router-dom';
import Card from '../Card/Card';
import ItemDetail from './ItemDetail';

const ProcessItemDetails = (itemId) => {
    const [disc, setDisc] = useState(null);

    const getDetails = async () => {
        const details = await getItemDetails(itemId);
        setDisc(details);
    }

    useEffect(() => {
        getDetails();
    }, [disc] );

    return ItemDetail(disc);
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