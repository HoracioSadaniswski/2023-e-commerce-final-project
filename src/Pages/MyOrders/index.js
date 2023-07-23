import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Layout } from '../../Components/Layout';
import { OrdersCard } from '../../Components/OrdersCard';
import { ShoppingCartContext } from '../../Context';
import './MyOrders.css';

function MyOrders() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className='container-orders'>
        <div>
          <h1>Mis compras</h1>
        </div>
        {
          context.order.map((order, index) => (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard 
                totalPrice={order.totalPrice} 
                totalProducts={order.totalProducts}/>
            </Link>
          ))
        }
      </div>
    </Layout>
  );
}

export { MyOrders };