import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import { makeOrder } from "../../Services/FireBase";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const CheckoutForm = () => {
    const blank = {
        name: "",
        email: "",
        adress: "",
    };

    const MySwal = withReactContent(Swal)

    const [ customer, setCustomer ] = useState( blank );

    const navigate = useNavigate();
    const { cart, getTotalPrice, clearCart } = useContext(cartContext);

    const handleCheckout = async (event) => {
        event.preventDefault();
        const purchase = {
            items: cart,
            customer: customer,
            date: new Date(),
            total: getTotalPrice(),
        }

        try {
            const orderId = await makeOrder(purchase);
            MySwal.fire({
                title: <strong>Bien ahi!</strong>,
                html: <i>La compra se hizo excelentemente! tu nro. de orden es: {orderId}</i>,
                icon: 'success'
            })
            clearCart();
            navigate(`/order-confirmation/${orderId}`);
        } catch (error) {
            MySwal.fire({
                title: <strong>Todo Mal!</strong>,
                html: <i> No se pudo hacer la compra culpa de: {error.message}</i>,
                icon: 'error'
            })
        }
       
    };

    const onInput = (event) => {
        const value = event.target.value;
        const field = event.target.name;

        const newState = { ...customer };
        newState[field] = value;
        setCustomer(newState); 
    }

    function resetForm(form) {
        form.preventDefault();
        setCustomer( blank );
    }
    
    return (
        <form>
            <h2>Completa tu info!</h2>
            <div>
                <label htmlFor="name"> Nombre Completo: </label>
                <input 
                    type="text"
                    name="name"
                    value={customer.name}
                    onChange={onInput}
                />
            </div>
            <div>
                <label htmlFor="email"> email: </label>
                <input 
                    type="email"
                    name="email"
                    value={customer.email}
                    onChange={onInput}
                />
            </div>
            <div>
                <label htmlFor="adress"> Direccion: </label>
                <input 
                    type="text"
                    name="adress"
                    value={customer.adress}
                    onChange={onInput}
                />
            </div>

            <button disabled={ !(customer.name !== "" && customer.email !== "" && customer.adress !== "") } onClick={handleCheckout}> Confirmar Compra! </button>
            <button onClick={resetForm}>Cancelar</button>

        </form>
    );

}

export default CheckoutForm;