import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import { OrderCard } from '../../Components/OrderCard';
import iconArrow from '../../Assets/flechita.svg';
import './MyOrder.css';

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/')+1);
  if (index === 'last') index = context.order?.length -1

  return (
    <>
      <div className='my-order-container'>
        <div className='icon-back-title'>
          <Link to='/my-orders'>
            <img src= { iconArrow } alt="back to" />
          </Link>
          <h1>Mi compra</h1>
        </div>
        <div className='container-cards'>
        {
          context.order?.[index]?.products.map(product => (
            <OrderCard 
            key={product.title}
            title={product.title}
            image= {product.image}
            price= {product.price}
            />
            ))
          }
        </div>
    </div>
  </>

  );
}

export { MyOrder };