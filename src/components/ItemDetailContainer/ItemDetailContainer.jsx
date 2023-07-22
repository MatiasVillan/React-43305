import { useState, useEffect } from 'react';
import { getItemDetails } from '../../services/MockService';
import { useParams } from 'react-router-dom';
import Card from '../Card/Card';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
    const [disc, setDisc] = useState(null);
    const {itemId} = useParams();

    const getDetails = async () => {
        const details = await getItemDetails(itemId);
        setDisc(details);
    }

    useEffect(() => {
        getDetails();
    }, [disc] );

    return ItemDetail(disc);
}

export default ItemDetailContainer;