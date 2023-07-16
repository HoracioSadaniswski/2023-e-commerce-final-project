import React from 'react';
import { Layout } from '../../Components/Layout';
import { Card } from '../../Components/Card';
import { ProductDetail } from '../../Components/ProductDetail';


function Home() {
  return (
    <Layout>
        <Card/>
        <ProductDetail/>
    </Layout>
  );
}

export { Home };