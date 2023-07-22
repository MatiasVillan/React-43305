import { Link } from 'react-router-dom'; 
import './Card.css';

const Card = (props) => {
    const { id, title, artist, genre, stock, price, img } = props;
    const link = `/product/${id}`

    return (
        <div className='item-card'>
            <div className="item-card_img">
                <Link to={link}><img src={img} alt="Tapa del disco"></img></Link>
            </div>            
            <div className="item-card_header">
            <Link to={link}><h2>{title} - {artist}</h2></Link>
            </div>
            <div className="item-card_detail">
                <small>{genre}</small>
                <h4>$ {price}</h4>
            </div>
        </div>
    );
}

export default Card;