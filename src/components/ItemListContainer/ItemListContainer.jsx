import { useState, useEffect } from 'react';
import getData from '../../services/MockService'
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [ products, setProducts ] = useState([]);

    const populateList = async () => {
        const productList = await getData();
        setProducts(productList);
    };

    useEffect( () => { populateList(); }, [] );

    return ItemList(products);
}
  
export default ItemListContainer;