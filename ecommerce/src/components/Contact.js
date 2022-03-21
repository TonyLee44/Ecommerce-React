import React from 'react';


export default function Contact() {
    return(
        <div>
  <form>
      <label htmlFor="first">First name:</label><br />
      <input type="text" id="first" name="first" placeholder="John" required /><br />
      <label htmlFor="last">Last name:</label><br />
      <input type="text" id="last" name="last" placeholder="Doe" required /><br />
      <label htmlFor="phone">Phone Number:</label><br />
      <input type="tel" id="phone" name="phone" placeholder="555-555-5555" /><br />
      <label htmlFor="email">E-mail:</label><br />
      <input type="email" id="email" name="email" placeholder="JohnDoe@gmail.com" /><br />
      <label htmlFor="comments">Comments:</label><br />
      <textarea name="comments" id="comments" placeholder="Leave a question or comment here..."></textarea> <br />
      <input type="submit" formAction="#"/>
  </form>

  <footer id="footer">
    <div className="footer-text">
      <div className="footer-links">
        <a href="index.html"> Home |</a>
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