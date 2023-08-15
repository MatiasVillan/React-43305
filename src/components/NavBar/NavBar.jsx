import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li id="navbar-brand"><Link to="/">BLACKDISCO</Link></li>
                <li><Link to="/">Discos</Link></li>
                <li><Link to="/genre/Rock">Rock</Link></li>
                <li><Link to="/genre/Pop">Pop</Link></li>
                <li><Link to="/genre/Jazz">Jazz</Link></li>
                <li><Link to="/genre/Progressive">Progressive</Link></li>
                <li><Link to="/genre/Soundtrack">Soundtrack</Link></li>
                <li><Link to="/cart"><CartWidget /></Link></li>                
            </ul>
        </nav>
    );
}

export default NavBar;