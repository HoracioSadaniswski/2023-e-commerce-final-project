import React from "react";
import { useContext } from 'react';
import BtnAdd from './bt_add_to_cart.svg';
import { ShoppingCartContext } from '../../Context'
import './Card.css';

const Card = ({ searchProduct }) => {
  const context = useContext(ShoppingCartContext);
  

  //Busqueda de productos
  const filteredProducts = context.products.filter
  (product => product.title.toLowerCase().includes(searchProduct.toLowerCase()));



  const showProduct = (product) => {
    context.setProductShow(product);
    context.openProductDetail();
    context.closeCheckoutMenu();
  }

const addProductToCart = (event, product) => {
  event.stopPropagation()
  context.setCount(context.count + 1)
  context.setCartProducts([...context.cartProducts, product])
  
}


  return (
    <section className='main-container'>
      <div className='cards-container'>
      {filteredProducts.map((product) =>(
        <div key={product.title} className='product-card'>
          <img onClick={() => showProduct(product)} src= {product.image} alt={product.title}/>
          <div className="product-info">
            <div>
              <p>{product.price}</p>
              <p>{product.title}</p>
            </div>
            <figure onClick={(event) => addProductToCart(event, product)} >
              <img src={ BtnAdd } alt="Agregar"/>
            </figure>
          </div>
        </div>
      ))}
      </div>

  </section>
  )
};

export { Card };