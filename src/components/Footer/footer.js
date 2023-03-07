import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__logo">
          <h1> LOGO </h1>
        </div>
        <div className="footer__social">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-instagram"></i></a>
        </div>
      </div>
      <div className="footer__links">
      <div className="footer__links__column">
          <h3>Contact Us</h3>
          <ul>
            <li><a href="#">Phone: +1 (555) 555-5555</a></li>
            <li><a href="#">Email: info@mywebsitename.com</a></li>
            <li><a href="#">Address: 123 Main St, Anytown USA</a></li>
          </ul>
        </div>
        <div className="footer__links__column">
          <h3>About Us</h3>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
        </div>
        <div className="footer__links__column">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Web Design</a></li>
            <li><a href="#">Graphic Design</a></li>
            <li><a href="#">SEO</a></li>
          </ul>
        </div>
        <div className="footer__links__column">
          <h3>Man</h3>
          <ul>
            <li><a href="#">My dashboard</a></li>
            <li><a href="#">Drive with company</a></li>
            <li><a href="#">SEO</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
      
      </div>
      <div className="footer__bottom">
        <p>© 2023 My Website Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;