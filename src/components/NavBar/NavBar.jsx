import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li id="navbar-brand"><Link to="/">BLACKDISCO</Link></li>
                <li><Link to="/">Discos</Link></li>
                <li><Link to="/genre/rock">Rock</Link></li>
                <li><Link to="/genre/pop">Pop</Link></li>
                <li><Link to="/genre/jazz">Jazz</Link></li>
                <li><Link to="/us">Nosotros</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
                <li><Link to="/cart"><CartWidget /></Link></li>                
            </ul>
        </nav>
    );
}

export default NavBar;