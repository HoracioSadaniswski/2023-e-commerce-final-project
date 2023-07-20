import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../../Components/OrderCard';
import iconClose from './icon_close.png';
import './CheckoutMenu.css';

const CheckoutMenu = () => {
  const context = useContext(ShoppingCartContext);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    context.cartProducts.forEach((product) => {
      const priceCurrency = parseFloat(product.price.slice(1));
      totalPrice += priceCurrency;
    });
    return totalPrice.toFixed(2);
  };

  return (
    <aside className={`${context.isCheckoutMenuOpen ? 'checkoutMenu' : 'checkoutMenu hidden'}`}>
      <div className='title-container' onClick={context.closeCheckoutMenu}>
        <img src= { iconClose } alt="close" />
        <p className='title'>Mi carrito</p>
      </div>

      <div className='products'>
        {
          context.cartProducts.map((product) => (
            <OrderCard 
            key={product.title}
            title={product.title}
            image= {product.image}
            price= {product.price}
            />
            ))
          }
      </div>
      
      <div className="order">
        <p>
          <span>Total</span>
        </p>
        <p>${calculateTotalPrice()}</p>
      </div>
        
      <button className="primary-button">
        Confirmar
      </button>
      
    </aside>
  )
}

export { CheckoutMenu };