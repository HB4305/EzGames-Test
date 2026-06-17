import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Bag from './pages/Bag';
import BookList from './pages/BookList';
import BookDetail from './pages/BookDetail';
import Collection from './pages/Collection';
import ScrollToTop from './components/ScrollToTop';
import { CartProvider } from './contexts/CartContext';
import styles from './App.module.css';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
      <div className={`font-body-md text-on-background antialiased bg-surface min-h-screen flex flex-col ${styles.appBackground}`}>
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<BookList />} />
            <Route path="/book/:id" element={<BookDetail />} />
            <Route path="/collection/:id" element={<Collection />} />
            <Route path="/bag" element={<Bag />} />
          </Routes>
        </div>
        <Footer />
      </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
