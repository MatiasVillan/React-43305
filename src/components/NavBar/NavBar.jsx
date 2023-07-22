import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li id="navbar-brand"><Link to="/">BLACKDISCO</Link></li>
                <li><Link to="/">Discos</Link></li>
                <li><Link to="/products">Productos</Link></li>
                <li><Link to="#">Nosotros</Link></li>
                <li><Link to="#">Contacto</Link></li>
                <li><Link to="/cart"><CartWidget /></Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;