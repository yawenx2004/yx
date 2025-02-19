import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router';

import Nav from './nav';
import Home from './home';
import About from './about';
import Post from './post';
import Fallback from './fallback';
import Footer from './footer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="*" element={<Fallback />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
