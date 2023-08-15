import Card from '../Card/Card';
import './ItemDetail.css'

const ItemDetail = (props) => {
    const { disc, realStock, handleAddToCart } = props;

    return (
        <div className="container">
            <h1>Detalles de Disco:</h1>
            <div className="card-container">
                <Card realStock={realStock} handleAddToCart={handleAddToCart} {...disc} />
            </div>
        </div>
    );
}

export default ItemDetail;