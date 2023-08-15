import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrder } from "../../Services/FireBase";

const OrderConfirmation = () => {
    const [ order, setOrder ] = useState(null);
    const { id } = useParams();

    const prepareOrder = async (id) => {
        const data = await getOrder(id);
        setOrder(data);
    } 

    useEffect( () => {
        prepareOrder(id);        
    }, [order] )

    return (
        <div>
            <h1>Muchas gracias!</h1>
            {order !== null
                ? (
                    <div>
                        <p>Compraste:</p>
                        {order.items.map( (item) => {
                            return (
                                <small>
                                    {item.title} - {item.artist} x {item.count}  
                                </small>
                            )
                        } )}
                    </div>
                )
                : <h3>Cargando</h3> } 
        </div>
    );

}

export default OrderConfirmation;