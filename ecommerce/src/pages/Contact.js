import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "../css/main.css";

const Home = () => {
    return(
        <div>
        <header class="stretch">
    <img class="logo" src="img/ecommercelogo.png" alt="logo"/>
    <h1>Gone Golfing</h1>

    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="products.html">Products</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  </header>

  <form>
      <label for="first">First name:</label><br />
      <input type="text" id="first" name="first" placeholder="John" required /><br />
      <label for="last">Last name:</label><br />
      <input type="text" id="last" name="last" placeholder="Doe" required /><br />
      <label for="phone">Phone Number:</label><br />
      <input type="tel" id="phone" name="phone" placeholder="555-555-5555" /><br />
      <label for="email">E-mail:</label><br />
      <input type="email" id="email" name="email" placeholder="JohnDoe@gmail.com" /><br />
      <label for="comments">Comments:</label><br />
      <textarea name="comments" id="comments" placeholder="Leave a question or comment here..."></textarea> <br />
      <input type="submit" formaction="#"/>
  </form>

  <footer id="footer">
    <div class="footer-text">
      <div class="footer-links">
        <a href="index.html"> Home |</a>
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
      <a href="https://www.facebook.com/" target="_blank">
        <img src="img/facebooklogo.jpeg" alt="facebook" width="50px"/>
      </a>
      <a href="https://www.instagram.com/" target="_blank">
        <img src="img/instagramlogo.jpeg" alt="instagram" width="50px"/>
      </a>
      <a href="https://www.twitter.com/" target="_blank">
        <img src="img/twitterlogo.png" alt="instagram" width="50px"/>
      </a>
    </div>
  </footer>
        </div>
    );
}