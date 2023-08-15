import { useState, useEffect } from 'react';
import getData, { getGenreList } from '../../Services/MockService';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { Blocks } from 'react-loader-spinner'

const ItemListContainer = () => {
    const [ discs, setDiscs ] = useState([]);
    const { genreId } = useParams();
    const [ loading, setLoading ] = useState(true);

    const setList = async () => {
        let discList = genreId
        ? await getGenreList(genreId)
        : await getData();
        setDiscs(discList);
        setLoading(false);
    }

    useEffect( () => {
        setLoading(true);
        setList();        
    }, [genreId] );

    if (loading)
        return (
            <Blocks
            visible={true}
            height="120"
            width="120"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper" />
        )
    else if ( discs.length > 0 )
        return ItemList(discs);
    else
        return (<h1>Error 404, Página no encontrada.</h1>);
}
  
export default ItemListContainer;