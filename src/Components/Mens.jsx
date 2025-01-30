import React from 'react'
import ProductCard from './ProductCard'
import "./Mens.css"
function Mens() {
    const products = [
        {
          id: 1,
          image: "/assets/Mens/1.webp",
          name: "Men's Stylish Jacket",
          rating: 4,
          price: 1999,
        },
        {
          id: 2,
          image: "/assets/Mens/2.webp",
          name: "Premium Running Sneakers",
          rating: 5,
          price: 2999,
        },
        {
          id: 3,
          image: "/assets/Mens/3.webp",
          name: "Luxury Leather Watch",
          rating: 4,
          price: 4999,
        },
        {
          id: 4,
          image: "/assets/Mens/4.webp",
          name: "Slim Fit Denim Jeans",
          rating: 5,
          price: 1599,
        },
        {
          id: 5,
          image: "/assets/Mens/5.webp",
          name: "Cotton Crew Neck T-Shirt",
          rating: 4,
          price: 799,
        },
        {
          id: 6,
          image: "/assets/Mens/6.webp",
          name: "Casual Warm Hoodie",
          rating: 5,
          price: 1799,
        },
      ];
  return (
    <div className='container'>
      <h2>Men's Exclusive</h2>
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  )
}

export default Mens
