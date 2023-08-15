import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { cartContext } from '../../context/cartContext';
import { Blocks } from 'react-loader-spinner'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { getDisc } from '../../Services/FireBase';

const ItemDetailContainer = () => {
    const {itemId} = useParams();
    const [ disc, setDisc ] = useState([]);
    const [ isValidURL, setIsValidURL ] = useState(true);
    const { addToCart, getItemInCart } = useContext(cartContext);
    const [ loadingDetails, setLoadingDetails ] = useState(true);
    const MySwal = withReactContent(Swal)

    const getDetails = async () => {
        const details = await getDisc(itemId);

        if (details)
            setDisc(details);            
        else 
            setIsValidURL(false);

        setLoadingDetails(false);
    }

    useEffect(() => {
        setLoadingDetails(true);
        getDetails();
    }, [itemId] );

   /* const isBetween = (value, min, max) => {
        if (!Number(value)) {
          return false;
        }
        return value >= min && value <= max;
    }

    if( !isBetween(itemId, 1, 20) ) 
        return <h1>Error 404, Página no encontrada.</h1>;*/

    const handleAddToCart = (clicks) => {
        addToCart(disc, clicks);
        MySwal.fire({
            title: <strong>Bien ahi!</strong>,
            html: <i>Agregaste {clicks} discos al carrito!</i>,
            icon: 'success'
          })
       // setIsInCart(true);
    }

    const itemInCart = getItemInCart(itemId);
    
    const realStock = itemInCart
        ? disc.stock - itemInCart.count
        : disc.stock

    if (loadingDetails)
        return (
            <Blocks
            visible={true}
            height="120"
            width="120"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper" />
        )
    else if (isValidURL)
        return <ItemDetail itemInCart={itemInCart} disc={disc} realStock={realStock} handleAddToCart={handleAddToCart}/>;
    else
        return <h1>Error 404, Página no encontrada.</h1>;
    }

export default ItemDetailContainer;