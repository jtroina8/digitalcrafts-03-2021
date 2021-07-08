import React from "react";
import { useParams } from "react-router";

export default function Individual() {
    const [ id ]
  const getProduct = async () => {
    const data = await fetch(`https://fakestoreapi.com/products/${id}`);
    const json = await data.json();
  };
  const { id } = useParams();
  return (
    <div>
      <h1>Individual Products</h1>
    </div>
  );
}
