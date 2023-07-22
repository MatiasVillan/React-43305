import { Link } from 'react-router-dom'; 
import './Card.css';

const Card = (props) => {
    const { id, title, artist, genre, stock, price, img } = props;

    return (
        <div className='item-card'>
            <div className="item-card_img">
                <img src={img} alt="Tapa del disco"></img>
            </div>            
            <div className="item-card_header">
                <h2>{title} - {artist}</h2>
            </div>
            <div className="item-card_detail">
                <small>{genre}</small>
                <h4>$ {price}</h4>
            </div>
        </div>
    );
}

export default Card;