import React, { useContext, useEffect } from 'react';
import { Layout } from '../../Components/Layout';
import { Card } from '../../Components/Card';
import { ProductDetail } from '../../Components/ProductDetail';
import { ShoppingCartContext } from '../../Context';
import './home.css';



function Home() {
  const context = useContext(ShoppingCartContext);

  useEffect(() => {
    context.setSelectedCategory('todo');
  }, []);

  return (
    <Layout>
      <div className='home-container'>
        <div className='search-products'>
          <input 
            type='text' 
            placeholder='Buscador de productos'
            value={context.searchProduct}
            onChange={(event) => context.setSearchProduct(event.target.value)}
          />
        </div>
        <Card 
          searchProduct={context.searchProduct} 
          selectedCategory={context.selectedCategory}
        />
        <ProductDetail/>
      </div>
    </Layout>
  );
}

export { Home };