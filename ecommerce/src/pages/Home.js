import React from "react";
import "../css/main.css";

const Home = () => {
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

  <section id="hero">
    <h2 class="whitesmoke">Golfing is a necessity, grab your gears for your next round!</h2>
  </section>
  <section>
      <h3>Whether you are a beginner, amateur, or pro, you are in the right place! <br /> Check out the products page for more information or if you have any questions just contact us through the contact page. <br />
      Come and grab your gears for your next round of golf!</h3>
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

export default Home;