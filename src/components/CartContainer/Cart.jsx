import React from "react";

const Cart = ( props ) => {

   const { cart, remover, price } =  props;

   return (
      <div>
         <h1>Carrito</h1>
            { cart.length > 0
            ? cart.map( (item) => (
               <div>
                  <div key={item.id}>
                     <h2> {item.title} </h2>
                     <p> {item.count} unidades x ${item.price} = ${item.count * item.price}</p>
                     <button onClick={ () => remover(item.id) }>Quitar</button>
                  </div>               
                  <br />
               </div> 
               ))
            : <h2>Tu Carrito esta vacío</h2>}
            <div>
               { price
                  ? <small>Total de la compra: ${price}</small>
                  : null  }
            </div>
                  
      </div>
   );
}

export default Cart;