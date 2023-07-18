import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
  //Shopping cart Increment
  const [count, setCount] = useState(0);

  //Product detail - open/close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

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
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}