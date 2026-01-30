import React from 'react';
import { useCart } from '../context/SimpleCartContext';

const SimpleCart = () => {
  const { 
    cartItems, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    getTotalPrice, 
    clearCart 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        zIndex: 10000,
        display: 'flex',
        justifyContent: 'flex-end'
      }}
      onClick={() => setIsCartOpen(false)}
    >
      <div 
        style={{
          width: '450px',
          maxWidth: '90vw',
          background: 'white',
          height: '100vh',
          overflowY: 'auto',
          boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
          display: 'flex',
          flexDirection: 'column'
        }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{
          padding: '20px',
          borderBottom: '1px solid #eee',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: '#fef5e7'
        }}>
          <h2 style={{ margin: 0, color: '#2c3e50' }}>Your Order</h2>
          <button 
            style={{
              background: 'none',
              border: 'none',
              fontSize: '2rem',
              cursor: 'pointer',
              color: '#7f8c8d',
              padding: 0,
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              transition: 'all 0.3s ease'
            }}
            onClick={() => setIsCartOpen(false)}
            onMouseOver={(e) => e.target.style.background = 'rgba(0, 0, 0, 0.1)'}
            onMouseOut={(e) => e.target.style.background = 'none'}
          >
            ×
          </button>
        </div>
        
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {cartItems.length === 0 ? (
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px 20px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '20px', opacity: 0.5 }}>🛒</div>
              <p style={{ fontSize: '1.2rem', color: '#2c3e50', marginBottom: '10px' }}>Your cart is empty</p>
              <p style={{ color: '#7f8c8d', marginTop: '10px' }}>Add some delicious items to get started!</p>
            </div>
          ) : (
            <>
              <div style={{ flex: 1, padding: '20px' }}>
                {cartItems.map((item) => (
                  <div key={item.id} style={{
                    display: 'flex',
                    gap: '15px',
                    padding: '15px 0',
                    borderBottom: '1px solid #eee'
                  }}>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      style={{
                        width: '80px',
                        height: '80px',
                        objectFit: 'cover',
                        borderRadius: '8px'
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <h4 style={{ margin: '0 0 5px 0', color: '#2c3e50' }}>{item.name}</h4>
                      <div style={{ fontWeight: '600', color: '#d35400' }}>${item.price}</div>
                    </div>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '10px'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        background: '#fef5e7',
                        borderRadius: '20px',
                        padding: '5px'
                      }}>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          style={{
                            background: '#d35400',
                            color: 'white',
                            border: 'none',
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            fontWeight: '600',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseOver={(e) => {
                            e.target.style.background = '#c0392b';
                            e.target.style.transform = 'scale(1.1)';
                          }}
                          onMouseOut={(e) => {
                            e.target.style.background = '#d35400';
                            e.target.style.transform = 'scale(1)';
                          }}
                        >
                          -
                        </button>
                        <span style={{
                          minWidth: '20px',
                          textAlign: 'center',
                          fontWeight: '600'
                        }}>
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          style={{
                            background: '#d35400',
                            color: 'white',
                            border: 'none',
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            fontWeight: '600',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseOver={(e) => {
                            e.target.style.background = '#c0392b';
                            e.target.style.transform = 'scale(1.1)';
                          }}
                          onMouseOut={(e) => {
                            e.target.style.background = '#d35400';
                            e.target.style.transform = 'scale(1)';
                          }}
                        >
                          +
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        style={{
                          background: 'none',
                          border: 'none',
                          fontSize: '1.2rem',
                          cursor: 'pointer',
                          padding: '5px',
                          borderRadius: '50%',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => e.target.style.background = 'rgba(255, 0, 0, 0.1)'}
                        onMouseOut={(e) => e.target.style.background = 'none'}
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div style={{
                padding: '20px',
                borderTop: '1px solid #eee',
                background: '#fef5e7'
              }}>
                <div style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  color: '#2c3e50',
                  marginBottom: '15px',
                  textAlign: 'center'
                }}>
                  <strong>Total: ${getTotalPrice().toFixed(2)}</strong>
                </div>
                <button 
                  style={{
                    width: '100%',
                    padding: '15px',
                    background: 'linear-gradient(135deg, #d35400, #e67e22)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    marginBottom: '10px'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.12)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  Checkout 🛒
                </button>
                <button 
                  onClick={clearCart}
                  style={{
                    width: '100%',
                    padding: '10px',
                    background: 'transparent',
                    color: '#7f8c8d',
                    border: '1px solid #7f8c8d',
                    borderRadius: '25px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = 'rgba(255, 0, 0, 0.1)';
                    e.target.style.borderColor = '#dc3545';
                    e.target.style.color = '#dc3545';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.borderColor = '#7f8c8d';
                    e.target.style.color = '#7f8c8d';
                  }}
                >
                  Clear Cart
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SimpleCart;