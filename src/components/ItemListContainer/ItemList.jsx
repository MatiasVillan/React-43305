import Card from '../Card/Card';
import './ItemList.css'

const ItemList = (products) => {

    return (
        <div className='item-list-container'>
            <h1>Lista de Discos:</h1>
            <div className="flex-container">
                { products.map( (item) => ( <Card list={true} key={item.id} {...item} /> ))}
            </div>
        </div>
    );
}

export default ItemList;