import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
  //Shopping cart Increment
  const [count, setCount] = useState(0);
  // Shopping cart Add to cart
  const [cartProducts, setCartProducts] = useState([]);


  //Product detail - open/close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

    //Checkout Menu - open/close
    const [isCheckoutMenuOpen, setIsCheckoutMenuOpen] = useState(false);
    const openCheckoutMenu = () => setIsCheckoutMenuOpen(true);
    const closeCheckoutMenu = () => setIsCheckoutMenuOpen(false);

  //Product detail - Motrar detalles
  const [productShow, setProductShow] = useState({});
  

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productShow,
      setProductShow,
      cartProducts,
      setCartProducts,
      isCheckoutMenuOpen,
      openCheckoutMenu,
      closeCheckoutMenu,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}