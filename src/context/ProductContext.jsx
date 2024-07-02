import React, { createContext, useContext, useState, useEffect } from 'react';
import productsData from './../products.json'; // Import your JSON data

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState({});

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <ProductContext.Provider value={{ 
      products 
    }}>
      {children}
    </ProductContext.Provider>
  );
};
