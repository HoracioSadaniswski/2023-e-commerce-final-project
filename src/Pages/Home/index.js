import React, { useState } from 'react';
import { useContext } from 'react';
import { Layout } from '../../Components/Layout';
import { Card } from '../../Components/Card';
import { ProductDetail } from '../../Components/ProductDetail';
import { ShoppingCartContext } from '../../Context';
import './home.css';



function Home() {
  const context = useContext(ShoppingCartContext);
  const [searchProduct, setSearchProduct] = useState('');


  return (
    <Layout>
      <div className='search-products'>
        <input 
          type='text' 
          placeholder='Buscador de productos'
          value={searchProduct}
          onChange={(event) => setSearchProduct(event.target.value)}
        />
      </div>
      <Card searchProduct={searchProduct}/>
      <ProductDetail/>
    </Layout>
  );
}

export { Home };