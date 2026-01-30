import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/SimpleCartContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SimpleCart from './components/SimpleCart';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
            <SimpleCart />
          </div>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;