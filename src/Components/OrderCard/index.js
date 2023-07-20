import iconClose from './icon_close.png';
import './orderCard.css'

const OrderCard = props => {
  const { image, title, price } = props;

  return (
    <div className='shopping-cart'>
      <figure>
        <img src={image} alt={title}/>
      </figure>
      <p className='title'>{title}</p>
      <p>{price}</p>
      <img className='close-button' src={iconClose} alt='Close'/>
    </div>
    
  )
}

export { OrderCard };