import React from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Images from './Images';

export function Header() {
  return (
    <>
      <div>
          <div>
            <h1>
              <Link>
                <img src={Images.headerLogo} alt="" />
              </Link>
            </h1>
          </div>
          <nav>
              <Link to="/">Home</Link>
              <Link to="/">About Us</Link>
              <Link to="/">Service</Link>
              <Link to="/">QA</Link>
              <Link to="/">FAQ</Link>
              <Link to="/">Contact Us</Link>
                <Link>Sign In</Link>
          </nav>
      </div>
    </>
  )
}

export default Header