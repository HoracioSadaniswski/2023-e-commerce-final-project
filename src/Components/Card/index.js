import React from "react";
import './Card.css';
import BtnAdd from './bt_add_to_cart.svg'
const Card = () => {
  return (
    <section className='main-container'>
      <div className='cards-container'>

        <div className='product-card'>
          <img src='https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="Auriculares"/>
          <div class="product-info">
            <div>
              <p>$120,00</p>
              <p>Auriculares</p>
            </div>
            <figure>
              <img src={ BtnAdd } alt="Agregar"/>
            </figure>
          </div>
        </div>

      </div>
  </section>
  )
};

export { Card };