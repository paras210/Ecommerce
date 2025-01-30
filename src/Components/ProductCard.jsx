import React from "react";
import { FaStar } from "react-icons/fa"; 
import "./ProductCard.css"; 

function ProductCard({ product }) {
  
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-rating">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < product.rating ? "star filled" : "star"} />
          ))}
          <span className="rating-value">({product.rating})</span>
        </div>
        <p className="product-price">₹{product.price}</p>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
  );
}

export default ProductCard;
