import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import TableReservation from './components/TableReservation';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <div className="App">
            <Navbar 
              onCartClick={() => setIsCartOpen(true)}
              onReservationClick={() => setIsReservationOpen(true)}
            />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
            
            {/* Modals */}
            <Cart 
              isOpen={isCartOpen} 
              onClose={() => setIsCartOpen(false)} 
            />
            <TableReservation 
              isOpen={isReservationOpen} 
              onClose={() => setIsReservationOpen(false)} 
            />
          </div>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;