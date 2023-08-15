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

    return ItemList(discs);
}
  
export default ItemListContainer;