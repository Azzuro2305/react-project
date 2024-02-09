import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Aboutus from '../pages/Aboutus';
import Service from '../pages/Service';
import Qa from '../pages/Qa';
import Faq from '../pages/Faq';
import Contact from '../pages/Contact';
import Signin from '../pages/Signin';

export function Router() {
  return (
    <>
        {/* <BrowserRouter> */}
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path='/service' element={<Service />}></Route>
            <Route path='/qa' element={<Qa />}></Route>
            <Route path='/faq' element={<Faq />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/signin' element={<Signin />}></Route>
            </Routes>
      {/* </BrowserRouter> */}
    </>
  )
}

export default Router