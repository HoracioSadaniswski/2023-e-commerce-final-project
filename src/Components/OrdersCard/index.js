import iconArrow from '../../Assets/flechita.svg';
import './OrdersCard.css'

const OrdersCard = props => {
  const { totalPrice, totalProducts } = props;


  return (
    <div className='container-orders-card'>
      <div className='date-products'>
        <p>Fecha: 23-07-23</p>
        <p>Productos:{totalProducts}</p>
      </div>
      <div className='price-arrow'>
        <p>${totalPrice}</p>
        <img src={ iconArrow } alt='back'></img>
      </div>
    </div>
    
  )
}

export { OrdersCard };