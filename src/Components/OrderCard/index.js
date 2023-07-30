import iconClose from '../../Assets/icon_close.png';
import './orderCard.css'

const OrderCard = props => {
  const { image, title, price, handleDelete } = props;
  let renderCloseButton
  if (handleDelete) {
    renderCloseButton = <img className='close-button' src={iconClose} alt='Close'
    onClick={() => handleDelete(title)}/>
  }

  return (
    <div className='shopping-cart'>
      <figure>
        <img src={image} alt={title}/>
      </figure>
      <p className='title'>{title}</p>
      <p>{price}</p>
      {renderCloseButton}
    </div>
    
  )
}

export { OrderCard };