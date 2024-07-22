// CartContext.js
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  
  //State management
  const [cart, setCart] = useState([]);

  //function
  const addToCart = (product) => {
    if(!cart.includes(product)){
    setCart([...cart, product]);}
    else{
      alert('already in Cart')
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
