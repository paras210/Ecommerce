import React from 'react'
import "./Mens.css"

import ProductCard from './ProductCard'

function Women() {
    const products = [
        {
          id: 1,
          image: "/assets/Women/1.webp",
          name: "Elegant Party Dress",
          rating: 5,
          price: 2499,
        },
        {
          id: 2,
          image: "/assets/Women/2.webp",
          name: "Stylish Heel Sandals",
          rating: 4,
          price: 1899,
        },
        {
          id: 3,
          image: "/assets/Women/3.webp",
          name: "Classic Women’s Watch",
          rating: 5,
          price: 3499,
        },
        {
          id: 4,
          image: "/assets/Women/4.webp",
          name: "Premium Leather Handbag",
          rating: 5,
          price: 2799,
        },
        {
          id: 5,
          image: "/assets/Women/5.webp",
          name: "Casual Cotton T-Shirt",
          rating: 4,
          price: 999,
        },
        {
          id: 6,
          image: "/assets/Women/6.webp",
          name: "High Waist Skinny Jeans",
          rating: 5,
          price: 1999,
        },
      ];
  return (
    <div className='container'>
      <h2>Women's Collection</h2>
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  )
}

export default Women
