import React from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import './Cart.css';
import 'sweetalert2/dist/sweetalert2.min.css';

const Cart = ( props ) => {

   const { cart, remover, price, cleaner } =  props;
   const MySwal = withReactContent(Swal)

   return (
      <div className="cart-container">
         <h1 className="cart-header">Carrito</h1>
            { cart.length > 0
            ? cart.map( (item) => (
               <div>
                  <div key={item.id} className="cart-item">
                     <h2> {item.title} </h2>
                     <h3> {item.artist} </h3>
                     <p> {item.count} unidades x ${item.price} = ${item.count * item.price}</p>
                     <button onClick={ () => { remover(item.id) 
                        Swal.fire({
                           icon: 'info',
                           title: 'OK!',
                           text: 'Has quitado los productos del carrito!',
                        })
                     } }>Quitar</button>
                  </div>               
                  <br />
               </div> 
               ))
            : <h2>Tu Carrito esta vacío</h2>}
         <div className="cart-total">
            { price
               ? <div>
               <small>Total de la compra: ${price}</small>
               <br />
               <Link to="/checkout"><button className="item-counter-button" >COMPRAR!</button></Link>
               <br />
               <button className="item-cancel-button" onClick={ () => { cleaner() 
                  Swal.fire({
                     icon: 'info',
                     title: 'SI!',
                     text: 'Se ha vaciado el carrito!',
                  })
                 } }>Vaciar el carrito</button>
         </div>
            : null  }
         </div>
      </div>
   );
}

export default Cart;