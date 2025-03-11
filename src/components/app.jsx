import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router';

// pages
import Home from '../pages/home';
import Blog from '../pages/blog';
import About from '../pages/about';

// components
import Nav from './nav';
import Post from './post';
import Fallback from './fallback';
import Footer from './footer';

function App(props) {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="*" element={<Fallback />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
