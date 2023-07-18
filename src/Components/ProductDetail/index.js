import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context'
import './ProductDetail.css';
import iconClose from './icon_close.png';
import btnAdd from './bt_add_to_cart.svg';

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  const { image, title, price, description } = context.productShow;

  return (
    <aside className={`${context.isProductDetailOpen ? 'product-detail' : 'product-detail hidden'}`}>
      <div className='product-detail-close' onClick={context.closeProductDetail}>
        <img src= { iconClose } alt="close" />
      </div>
        <img className='image' src= {image} alt={title}/>
      <div className='product-info'>
        <p>{price}</p>
        <p>{title}</p>
        <p>{description}</p>
        <button 
        onClick={ () => context.setCount(context.count + 1)}
        className= 'primary-button add-to-cart-button'>
          <img src={ btnAdd } alt='Agregar al carrito'/>
            Add to cart
        </button>
      </div>
    </aside>
  )
}

export { ProductDetail };