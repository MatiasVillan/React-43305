import Card from '../Card/Card';
import './ItemDetail.css'

const ItemDetail = (product) => {
    return (
<div class="container">
  <h1>Detalles de Disco:</h1>
  <div class="card-container">
    <Card {...product} />
  </div>
</div>

    );
}

export default ItemDetail;