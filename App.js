import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Blogs from './Elements/Blogs';
import './App.css';
import Navbar from './Elements/Navbar';
import HeroSection from './Elements/HeroSection';
import Cards from './Elements/Cards';
import Homepage from './Pages/Homepage';
import Footer from './Elements/Footer';
import Explore from './Elements/Explore';

function App() {
  return (
    <div>
      {/* <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/blog' element={<Blogs />} />
      </Routes> */}
      <Navbar />
      <HeroSection />
      <Blogs />
      <Cards />
      <Explore/>
      <Footer/>
    </div>
  );
}

export default App;