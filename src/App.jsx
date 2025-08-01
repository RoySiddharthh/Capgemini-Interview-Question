import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductsComponent from "./assets/Products";
import ProductsContextData from "./ProductsData/ProductsContextData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ProductsContextData>
        <ProductsComponent />
      </ProductsContextData>
    </>
  );
}

export default App;
