import React from 'react';
import Slide from './Slide';

export default function Home() {
    return(
        <div>
          <Slide />
  <section>
      <h3>Whether you are a beginner, amateur, or pro, you are in the right place! <br /> Check out the products page for more information or if you have any questions just contact us through the contact page. <br />
      Come and grab your gears for your next round of golf!</h3>
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
