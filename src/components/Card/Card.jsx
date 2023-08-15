import { Link } from 'react-router-dom'; 
import './Card.css';
import ItemCounter from '../ItemCounter/ItemCounter';

const Card = (props) => {
    const { id, title, artist, genre, stock, price, img, list, realStock, handleAddToCart } = props;
    const linkId = `/product/${id}`
    const linkGenre = `/genre/${genre}`

    return (
        <div className='item-card'>
            <div className="item-card_img">
                <Link to={linkId}><img src={img} alt="Tapa del disco"></img></Link>
            </div>            
            <div className="item-card_header">
                <Link to={linkId}><h2>{title} - {artist}</h2></Link>
            </div>
            <div className="item-card_detail">
                <Link to={linkGenre}><h3>{genre}</h3></Link>
                <h4>$ {price}</h4>
            </div>
            { ( list ) 
            ? ( <Link to={linkId}><button className="purple-button">Ver</button></Link> )
            : (
                <div>
                    <ItemCounter stock={realStock} maxStock={stock} handleAddToCart={handleAddToCart}/>
                    <br />
                    <br />
                    <Link to="/"><button className="purple-button">Volver</button></Link> 
                </div>
            ) }
        </div>
    );
}

export default Card;