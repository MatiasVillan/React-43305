import { useState, useEffect } from 'react';
import getData, { getGenreList } from '../../Services/MockService';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [ discs, setDiscs ] = useState([]);
    const { genreId } = useParams();

    const setList = async () => {
        let discList = genreId
        ? await getGenreList(genreId)
        : await getData();
        setDiscs(discList);
    }

    useEffect( () => { setList(); }, [genreId] );

    if ( discs.length > 0 )
        return ItemList(discs);
    else
        return (<h1>Error 404, Página no encontrada.</h1>);
}
  
export default ItemListContainer;