import Card from '../Card/Card';
import './ItemDetail.css'

const ItemDetail = (disc, realStock, handleAddToCart) => {
    return (
        <div className="container">
            <h1>Detalles de Disco:</h1>
            <div className="card-container">
                <Card realStock={realStock} onConfirm={handleAddToCart} {...disc} />
            </div>
        </div>
    );
}

export default ItemDetail;