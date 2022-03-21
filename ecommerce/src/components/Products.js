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
  <footer id="footer">
    <div className="footer-text">
      <div className="footer-links">
        <a href="home.html"> Home |</a>
        <a href="products.html"> Products </a>
        <a href="contact.html"> | Contact Us </a>
      </div>
      <br />
      <div className="copyright">
        <p>
          &copy; Gone Golfing | ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
    <br />
    <div>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <img src="img/facebooklogo.jpeg" alt="facebook" width="50px"/>
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <img src="img/instagramlogo.jpeg" alt="instagram" width="50px"/>
      </a>
      <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
        <img src="img/twitterlogo.png" alt="instagram" width="50px"/>
      </a>
    </div>
  </footer>
        </div>
    );
}