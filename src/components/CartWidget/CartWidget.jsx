import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart }  from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
    let items = 3;
    return (
        <div>
            <FontAwesomeIcon icon={ faShoppingCart } size="2x" /> 
            <span style={{ fontSize:"1.5rem" }}> {items}</span>
        </div>
    );
}
  
export default CartWidget;