import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart }  from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
    const context = useContext(cartContext);
    const ammount = context.getTotalItemsInCart();
    
    return (
        <Link to="/cart">
            <div>
                <FontAwesomeIcon icon={ faShoppingCart } size="2x" />
                { ammount > 0 &&
                <span style={{ fontSize:"1.5rem" }}> {ammount}</span>}
            </div>
        </Link>
    );
}
  
export default CartWidget;