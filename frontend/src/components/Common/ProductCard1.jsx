import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import './ProductCard1.css';

const ProductCard1 = ({ product }) => {
  const [review, setReview] = useState("");
  const [positiveReviews, setPositiveReviews] = useState(product.positiveReviews || 0);
  const [negativeReviews, setNegativeReviews] = useState(product.negativeReviews || 0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (id) => {
    if (!review.trim()) return;

    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      const res = await axios.post(
        `http://localhost:4000/api/products/review/${id}`,
        { comment: review },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );

      setPositiveReviews(res.data.positiveReviews);
      setNegativeReviews(res.data.negativeReviews);
      setReview("");
      setError("");
    } catch (err) {
      console.error("Error Response:", err.response);
      setError("Error submitting review");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="product-card">
      <Link
        key={product._id}
        to={`/product/${product._id}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <h2>{product.name}</h2>
      </Link>
      <p className="description">{product.description}</p>
      <div className="price">${product.price}</div>

      <input
        type="text"
        placeholder="Write a review..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />

      <button
        onClick={() => handleSubmit(product._id)}
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>

      <div className="reviews">
        <p>👍 {positiveReviews}</p>
        <p>👎 {negativeReviews}</p>
      </div>

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default ProductCard1;
