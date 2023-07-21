import React, { lazy } from 'react';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { Layout } from '../../Components/Layout';
import { OrderCard } from '../../Components/OrderCard';
import './MyOrder.css';

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  return (
    <div className='my-order-container'>
      <h1 className='title-order'>My order</h1>
    <div className=''>
      {
        context.order?.slice(-1)[0].products.map(product => (
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
  );
}

export { MyOrder };