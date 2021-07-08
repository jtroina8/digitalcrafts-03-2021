import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getProducts from "../actions/getProductsActions";
import ProductsCard from "./ProductsCard";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.getProducts);
  useEffect(() => {
    getProducts(dispatch);
  }, []);

  return (
    <div>
      <h1>Product Page</h1>
      {products.map((singleProduct) => {
        return <ProductsCard singleProduct={singleProduct} />;
      })}
    </div>
  );
}
