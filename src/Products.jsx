import React, { useContext, useEffect } from "react";
import { productsContext } from "./ProductsData/ProductsContextData";

const ProductsComponent = () => {
  const context = useContext(productsContext);
  let { productsData, setProductsData } = context;

  //   console.log(productsData, setProductsData);
  const apiURL = "https://dummyjson.com/products";

  const fetchData = async (getApiUrl) => {
    try {
      setProductsData((prevState) => ({ ...prevState, loading: true }));
      const response = await fetch(getApiUrl, { method: "GET" });
      const result = await response.json();
      setProductsData((prevState) => ({ ...prevState, data: result.products }));
    } catch (error) {
      console.log("Some error occured ", error);
      setProductsData((prevState) => ({ ...prevState, error: error }));
    } finally {
      console.log("Completed!");
      setProductsData((prevState) => ({ ...prevState, loading: false }));
    }
  };

  useEffect(() => {
    fetchData(apiURL);
  }, []);

  console.log(productsData);
  if (productsData.loading) {
    return <h3>Please Wait, we are loading your data.</h3>;
  }

  return (
    <React.Fragment>
      <div className="products-parentcontainer">
        <h3>Hello Products</h3>
        <div className="prodcuts-display">
          <table>
            <tr>
              <th>Brand</th>
              <th>Category</th>
              <th>Description</th>
            </tr>
            {productsData.data.map((value, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>{value.brand}</td>
                    <td>{value.category}</td>
                    <td>{value.description}</td>
                  </tr>
                </>
              );
            })}
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductsComponent;
