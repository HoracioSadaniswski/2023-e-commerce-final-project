import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import { OrderCard } from '../../Components/OrderCard';
import iconClose from './icon_close.png';
import './CheckoutMenu.css';

const CheckoutMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (title) => {
    const filteredProducts = context.cartProducts.filter(product => product.title !== title)
    context.setCartProducts(filteredProducts)
    context.setCount(context.count - 1)
  }

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    context.cartProducts.forEach((product) => {
      const priceCurrency = parseFloat(product.price.slice(1));
      totalPrice += priceCurrency;
    });
    return totalPrice.toFixed(2);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: '21-07-23',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: calculateTotalPrice()
    }

    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
    context.setCount(context.count = 0)
    context.closeCheckoutMenu()
  }

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
            handleDelete= {handleDelete}
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
      
      <Link to='/my-orders/last'>
        <button 
          onClick={() => handleCheckout()}
          className="primary-button"
        >
          Continuar
        </button>
      </Link>
      
    </aside>
  )
}

export { CheckoutMenu };