import { useState, useEffect } from 'react';
import getData from '../../Services/MockService'
import Card from '../Card/Card'
import './ItemListContainer.css'

const ItemListContainer = () => {
    const [ products, setProducts ] = useState([]);

    const populateList = async () => {
        const productList = await getData();
        setProducts(productList);
    };

    useEffect( () => { populateList(); }, [] );

    return (
        <div className='item-list-container'>
            <h1>Lista de Discos:</h1>
            <div className="flex-container">
                { products.map( (item) => ( <Card key={item.id} {...item} /> ))}
            </div>
        </div>
    );
}
  
export default ItemListContainer;