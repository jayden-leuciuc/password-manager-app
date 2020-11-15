import React from 'react';
import { Button } from './Button';
import './pricing.scss';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Pricing</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3>Starter</h3>
                <h4>$9.99</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li>100 Passwords</li>
                  <li>Secure notes</li>
                  <li>Access to special resources</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                Protect me
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCrystalize />
                </div>
                <h3>Super Secure</h3>
                <h4>$19.99</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                <li>Best Value!</li>
                  <li>Unlimited passwords</li>
                  <li>Personal security monitoring</li>
                  <li>Other special perks</li>
                  
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                Protect me
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>Secure</h3>
                <h4>15.99</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li>200 passwords</li>
                  <li>Security monitoring</li>
                  <li>Access to special bonuses</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Protect me
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;