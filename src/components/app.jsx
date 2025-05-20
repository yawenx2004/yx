import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router';

// pages
import Home from '../pages/home/home';
import Blog from '../pages/ blog/blog';
import About from '../pages/about/about';

// components
import Nav from './nav/nav';
import Post from './post';
import Fallback from './fallback';
import Footer from './footer/footer';

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
