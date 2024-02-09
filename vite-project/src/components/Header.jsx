import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap'; // Add the missing import statement
import Images from './Images';

function Header() {
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
              <Button>
                <Link>Sign In</Link>
              </Button>
          </nav>
      </div>
    </>
  )
}

export default Header