import React from 'react';
import './footer.scss';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join now to try it out for free!
        </p>
        <p className='footer-subscription-text'>
          You can also buy our premium packages for added security!
        </p>
        <div className='input-areas'>
            <Link to='/products'><Button buttonStyle='btn--outline'>Packages</Button></Link>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <MdFingerprint className='navbar-icon' />
              SecureD
            </Link>
          </div>
          <small className='website-rights'>SecureD © 2020</small>
          <div className='social-icons'>
          <a className="social-icon-link"href={'http://facebook.com'} rel="noreferrer" target="_blank"><FaFacebook /></a>
          <a className="social-icon-link"href={'http://instagram.com'} rel="noreferrer" target="_blank"><FaInstagram /></a>
          <a className="social-icon-link"href={'http://youtube.com'} rel="noreferrer" target="_blank"><FaYoutube /></a>
          <a className="social-icon-link"href={'http://twitter.com'} rel="noreferrer" target="_blank"><FaTwitter /></a>
          <a className="social-icon-link"href={'http://linkedin.com'} rel="noreferrer" target="_blank"><FaLinkedin /></a>
              
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;