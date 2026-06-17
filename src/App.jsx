import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Bag from './pages/Bag';
import styles from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <div className={`font-body-md text-on-background antialiased bg-surface min-h-screen flex flex-col ${styles.appBackground}`}>
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bag" element={<Bag />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
