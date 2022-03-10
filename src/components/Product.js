import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";

import "./Product.css";
const Product = ({ name, id, imgURL, price }) => {
  const cart = useSelector((state) => state.cart.itemsList);
  const dispatch = useDispatch();

  const addToCart = () => {
    const newItem = {
      name,
      id,
      price,
    };

    console.log("New Item", newItem);
    dispatch(cartActions.addToCart(newItem));
  };

  console.log("cart", cart);
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
