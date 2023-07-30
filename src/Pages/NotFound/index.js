import React from 'react';
import { Layout } from '../../Components/Layout';
import './NotFound.css';
import imgNotFound from '../../Assets/notFoundPage.png';


function NotFound() {
  return (
    <Layout>
      <div className='not-found-container'>
        <div className='not-found-title'>
          <h3>Ups! Parece que esta página no existe.</h3>
        </div>
        <div className='not-found-image'>
          <img src={ imgNotFound } alt='Not Found' />
        </div>
      </div>
    </Layout>
  );
}

export { NotFound };