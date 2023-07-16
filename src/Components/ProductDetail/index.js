import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context'
import './ProductDetail.css';
import iconClose from './icon_close.png';
import btnAdd from './bt_add_to_cart.svg';

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside className={`${context.isProductDetailOpen ? 'product-detail' : 'product-detail hidden'}`}>
      <div className='product-detail-close' onClick={context.closeProductDetail}>
        <img src= { iconClose } alt="close" />
      </div>
        <img className='image' src='https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
      <div className='product-info'>
        <p>$35,00</p>
        <p>Bike</p>
        <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
        <button className= 'primary-button add-to-cart-button'>
          <img src={ btnAdd }/>
            Add to cart
        </button>
      </div>
    </aside>
  )
}

export { ProductDetail };