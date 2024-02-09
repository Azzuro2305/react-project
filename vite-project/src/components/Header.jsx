import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Images from './Images';
import Router from '../route/Router';
import Button from '../components/Button';

export function Header() {
  return (
    <>
    <BrowserRouter>
      <div className='flex align-middle justify-between px-20 py-5'>
          <div>
            <h1>
              <Link className='link' to='/'>
                <img src={Images.headerLogo} alt="" />
              </Link>
            </h1>
          </div>
          <nav className='flex align-middle space-x-10'>
              <Link className='link pt-2 hover:text-#27AC35' to="/" >Home</Link>
              <Link className='link pt-2 hover:text-#27AC35' to="/aboutus">About Us</Link>
              <Link className='link pt-2 hover:text-#27AC35' to="/service">Service</Link>
              <Link className='link pt-2 hover:text-#27AC35' to="/qa">QA</Link>
              <Link className='link pt-2 hover:text-#27AC35' to="/faq">FAQ</Link>
              <Link className='link pt-2 hover:text-#27AC35' to="/contact">Contact Us</Link>
              <Link className='link hover:text-#27AC35' to="/signin"><Button txt={"Sign in"}/></Link>
          </nav>
      </div>
      <Router />
      </BrowserRouter>
    </>
  )
}

export default Header
