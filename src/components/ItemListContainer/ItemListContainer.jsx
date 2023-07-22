import { useState, useEffect } from 'react';
import './ItemListContainer.css'

const ItemListContainer = () => {
    const { products, setProducts } = useState([]);

    return (
        <div className='item-list-container'>
            <h2>HOLA</h2>
        </div>
    );
}
  
export default ItemListContainer;