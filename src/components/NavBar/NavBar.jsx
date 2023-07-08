import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><a href="#">Principal</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>
                <li><CartWidget /></li>
            </ul>
        </nav>
    );
}

export default NavBar;