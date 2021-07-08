import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { useParams } from "react-router";

export default function ProductsCard(props) {
  const { id } = useParams();
  return (
    <div className="product-card">
      <div className="product-card-info">
        <h1>{props.singleProduct.title}</h1>
        <Link to={`/item/${props.singleProduct.id}`}>View Item</Link>
        <img src={props.singleProduct.image} alt="" />
        <h1>${props.singleProduct.price}</h1>
        <p>{props.singleProduct.description}</p>
      </div>
    </div>
  );
}
