import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><CartWidget /></li>
          </ul>
        </nav>
      );
}

export default NavBar;