import React from 'react';
import Home from './Pages/Main';
import AboutPage from './Pages/AboutPage';
import MenuPage from './Pages/MenuPage';
import ShopPage from './Pages/ShopPage';
import BlogReview from './Pages/BlogReview';
import ContactUs from './Pages/ContactUs';
import { Route,  Routes } from 'react-router-dom';



function App() {
  return (
    <>
 
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/blog" element={<BlogReview />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    
    </>
  );
}

export default App;