import React from "react";
import "../css/main.css";

const Products = () => {
    return(
        <div>
        <header class="stretch">
    <img class="logo" src="img/ecommercelogo.png" alt="logo"/>
    <h1>Gone Golfing</h1>

    <nav>
      <ul>
        <li><a href="home.html">Home</a></li>
        <li><a href="products.html">Products</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  </header>

  <h2>Gone Golfing with Taylormade</h2>

  <section class="productContainer">
    <section class="product">
      <img src="img/sim2max.webp" alt="Driver"/>
      <h3>Sim 2 Max Driver</h3>
      <p> Farthest driver of the year!</p>
      <p>$529.99</p>
      <button>Buy Now</button>
    </section>
    <section class="product">
      <img src="img/3wood.jpg" alt="3-Wood"/>
      <h3>Sim 2 Max 3-Wood</h3>
      <p>Most versatile off the tee and fairway!</p>
      <p>$299.99</p>
      <button>Buy Now</button>
    </section>
    <section class="product">
      <img src="img/3wood.jpg" alt="5-Wood"/>
      <h3>Sim 2 Max 5-Wood</h3>
      <p>Get to the green in two!</p>
      <p>$299.99</p>
      <button>Buy Now</button>
    </section>
    <section class="product">
      <img src="img/rescue.jpg" alt="Rescue"/>
      <h3>Sim 2 Max Rescue Hybrid</h3>
      <p>Stuck in the rough? No problem!</p>
      <p>$249.99</p>
      <button>Buy Now</button>
    </section>
    <section class="product">
      <img src="img/irons.jpg" alt="Irons"/>
      <h3>Sim 2 Max Irons (5-P)</h3>
      <p>Distance & Forgiveness!</p>
      <p>$779.99</p>
      <button>Buy Now</button>
    </section>
    <section class="product">
      <img src="img/mg3.webp" alt="MG3 Wedge"/>
      <h3>Taylormade MG3 52</h3>
      <p>Approach is the best way to par!</p>
      <p>$199.99</p>
      <button>Buy Now</button>
    </section>
    <section class="product">
      <img src="img/mg3.webp" alt="MG3 Wedge"/>
      <h3>Taylormade MG3 56</h3>
      <p>Stay out of the bunker!</p>
      <p>$199.99</p>
      <button>Buy Now</button>
    </section>
    <section class="product">
      <img src="img/mg3.webp" alt="MG3 Wedge"/>
      <h3>Taylormade MG3 60</h3>
      <p>Can't go under, hit it over!</p>
      <p>$199.99</p>
      <button>Buy Now</button>
    </section>
    <section class="product">
      <img src="img/golfbag.webp" alt="Golf Bag"/>
      <h3>Taylormade Golf Bag</h3>
      <p>Pack your equipments in here!</p>
      <p>$219.99</p>
      <button>Buy Now</button>
    </section>
    <section class="product">
      <img src="img/tp5x.jpeg" alt="TP5x"/>
      <h3>Taylormade TP5x</h3>
      <p>Spin and distance, all-in-one!</p>
      <p>$47.99</p>
      <button>Buy Now</button>
    </section>
    <section class="product">
      <img src="img/gloves.jpeg" alt="Gloves"/>
      <h3>Taylormade Gloves</h3>
      <p>Don't lose grip!</p>
      <p>$24.99</p>
      <button>Buy Now</button>
    </section>
    <section class="product">
      <img src="img/tees.jpeg" alt="Tees"/>
      <h3>Taylormade Tees</h3>
      <p>Grab a tee to get off the tee box!</p>
      <p>$9.99</p>
      <button>Buy Now</button>
    </section>
  </section>

  <footer id="footer">
    <div class="footer-text">
      <div class="footer-links">
        <a href="home.html"> Home |</a>
        <a href="products.html"> Products </a>
        <a href="contact.html"> | Contact Us </a>
      </div>
      <br />
      <div class="copyright">
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

export default Products;