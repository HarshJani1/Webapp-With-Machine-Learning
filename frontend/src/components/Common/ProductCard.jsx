import React from "react";
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p className="description">{product.description}</p>
      <div className="price">${product.price}</div>
      <div className="review-row">
        <span className="positive">👍 {product.positiveReviews}</span>
        <span className="negative">👎 {product.negativeReviews}</span>
      </div>
    </div>
  );
};

export default ProductCard;

