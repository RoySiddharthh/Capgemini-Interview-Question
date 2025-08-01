import { useState, createContext } from "react";

export const productsContext = createContext("Default value");

export function ProductsContextData({ children }) {
  const [productsData, setProductsData] = useState({
    data: [],
    error: "",
    loading: false,
  });

  return (
    <productsContext.Provider value={{ productsData, setProductsData }}>
      {children}
    </productsContext.Provider>
  );
}

export default ProductsContextData;
