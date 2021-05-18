import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <video src ='/videos/ccd-2.mp4' autoPlay loop muted/>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join Cafe Coffee Day online to receive our best deals!
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Quick Links</h2>
            <a href='https://www.cafecoffeeday.com/cafe-menu/whats-new'>Cafe Menu</a>
            <a href='https://www.cafecoffeeday.com/store-locator'>Cafe Finder/Locator</a>
            <a href='https://www.cafecoffeeday.com/careers'>Careers</a>
            <a href='https://www.cafecoffeeday.com/contact-us'>Customer Care</a>
          </div>
          <div class='footer-link-items'>
            <h2>Cafe Menu</h2>
            <a href='https://www.cafecoffeeday.com/cafe-menu/whats-new'>What's New</a>
            <a href='https://www.cafecoffeeday.com/cafe-menu/food'>Food</a>
            <a href='https://www.cafecoffeeday.com/cafe-menu/beverages'>Beverages</a>
            <a href='https://www.cafecoffeeday.com/cafe-menu/combos'>Combos</a>
            <a href='https://www.cafecoffeeday.com/cafe-menu/home-delivery'>Home Delivery</a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Business</h2>
            <a href='https://www.cafecoffeeday.com/business'>Lease Enquiry</a>
            <a href='https://www.cafecoffeeday.com/business/advertise'>Advertise With Us</a>
            <a href='https://www.cafecoffeeday.com/business/outdoor-catering'>Outdoor Catering Service</a>
            <a href='https://www.cafecoffeeday.com/contact-us'>Contact Us</a>
          </div>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <a href='https://www.cafecoffeeday.com/about-us'>Our Story</a>
            <a href='https://www.cafecoffeeday.com/news'>News/Events</a>
            <a href='https://www.cafecoffeeday.com/about-us/foundation'>Foundation</a>
            <a href='https://www.cafecoffeeday.com/thesquare/menu'>The Square</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Cafe Coffee Day
            </Link>
          </div>
          <small class='website-rights'>CCD © 2020</small>
          <div class='social-icons'>
            <Link
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
            <a href="https://www.facebook.com/cafecoffeeday" class='social-icon-link facebook'>  <i class='fab fa-facebook-f' /> </a>
            </Link>
            <Link
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
             <a href="https://www.instagram.com/cafecoffeeday/" class='social-icon-link instagram'> <i class='fab fa-instagram' /></a>
            </Link>
            <Link
              
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
             <a href="https://www.youtube.com/user/cafecoffeeday" class='social-icon-link youtube'> <i class='fab fa-youtube' /></a>
            </Link>
            <Link
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
            <a href="https://twitter.com/CafeCoffeeDay" class='social-icon-link twitter'>  <i class='fab fa-twitter' /></a>
            </Link>
            <Link
              to='/'
              target='_blank'
              aria-label='Pinterest'
            >
             <a href="https://www.pinterest.com/cafecoffeeday/" class='social-icon-link pinterest'> <i class='fab fa-pinterest' /></a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;