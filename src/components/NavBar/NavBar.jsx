import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Principal</Link></li>
                <li><Link to="/products">Productos</Link></li>
                <li><Link to="#">Nosotros</Link></li>
                <li><Link to="#">Contacto</Link></li>
                <li><CartWidget /></li>
            </ul>
        </nav>
    );
}

export default NavBar;