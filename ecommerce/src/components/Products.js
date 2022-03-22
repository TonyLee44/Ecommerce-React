import React from 'react';
import data from '../products.json';

export default function Products() {
  const {products} = data;
    return(
        <div>
        
  <h2>Gone Golfing with Taylormade</h2>

  <section className="productContainer">
    {products.map(product => {
      return (
        <section className="product" key={product.title}>
          <img src={product.image} alt={product.title}/>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>{product.price ? `$${product.price}` : "Unavailable"}</p>
          <button>Buy Now</button>
        </section> 
      );
    })}
  </section>

        </div>
    );
}