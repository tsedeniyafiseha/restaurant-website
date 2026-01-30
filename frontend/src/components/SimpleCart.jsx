import React, { useState } from 'react';
import { useCart } from '../context/SimpleCartContext';
import { useTheme } from '../context/ThemeContext';

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
  
  const { isDarkMode } = useTheme();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  });

  const handleCheckout = async () => {
    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone) {
      alert('Please fill in all required fields (Name, Email, Phone)');
      return;
    }

    setIsCheckingOut(true);
    
    try {
      const orderData = {
        customer_name: customerInfo.name,
        customer_email: customerInfo.email,
        customer_phone: customerInfo.phone,
        customer_address: customerInfo.address,
        notes: customerInfo.notes,
        items: cartItems,
        total_amount: getTotalPrice()
      };

      const response = await fetch('http://localhost:3001/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setOrderPlaced(true);
        clearCart();
        setTimeout(() => {
          setOrderPlaced(false);
          setIsCartOpen(false);
          setCustomerInfo({ name: '', email: '', phone: '', address: '', notes: '' });
        }, 3000);
      } else {
        throw new Error(result.error || 'Failed to place order');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      
      // Better error messages
      if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
        alert('Cannot connect to server. Please make sure the backend is running on http://localhost:3001');
      } else {
        alert(`Failed to place order: ${error.message}. Please try again.`);
      }
    } finally {
      setIsCheckingOut(false);
    }
  };

  if (!isCartOpen) return null;

  if (orderPlaced) {
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
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div style={{
          background: isDarkMode ? '#2c3e50' : 'white',
          padding: '60px 40px',
          borderRadius: '20px',
          textAlign: 'center',
          maxWidth: '500px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🎉</div>
          <h2 style={{ 
            color: isDarkMode ? '#ffffff' : '#2c3e50', 
            marginBottom: '15px',
            fontFamily: 'Playfair Display, serif'
          }}>Order Placed Successfully!</h2>
          <p style={{ 
            color: isDarkMode ? '#bdc3c7' : '#7f8c8d', 
            fontSize: '1.1rem',
            lineHeight: '1.6'
          }}>
            Thank you for your order! We'll contact you shortly to confirm your order and provide delivery details.
          </p>
          <div style={{
            marginTop: '30px',
            padding: '20px',
            background: isDarkMode ? 'rgba(46, 204, 113, 0.2)' : 'rgba(46, 204, 113, 0.1)',
            borderRadius: '10px',
            border: `1px solid ${isDarkMode ? 'rgba(46, 204, 113, 0.3)' : 'rgba(46, 204, 113, 0.2)'}`
          }}>
            <p style={{ 
              color: isDarkMode ? '#2ecc71' : '#27ae60',
              fontWeight: '600',
              margin: 0
            }}>
              📞 We'll call you within 15 minutes to confirm your order
            </p>
          </div>
        </div>
      </div>
    );
  }

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
          width: '500px',
          maxWidth: '90vw',
          background: isDarkMode ? '#2c3e50' : 'white',
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
          borderBottom: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#eee'}`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: isDarkMode ? '#34495e' : '#fef5e7'
        }}>
          <h2 style={{ 
            margin: 0, 
            color: isDarkMode ? '#ffffff' : '#2c3e50',
            fontFamily: 'Playfair Display, serif'
          }}>Your Order</h2>
          <button 
            style={{
              background: 'none',
              border: 'none',
              fontSize: '2rem',
              cursor: 'pointer',
              color: isDarkMode ? '#bdc3c7' : '#7f8c8d',
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
            onMouseOver={(e) => e.target.style.background = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}
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
              <p style={{ 
                fontSize: '1.2rem', 
                color: isDarkMode ? '#ffffff' : '#2c3e50', 
                marginBottom: '10px' 
              }}>Your cart is empty</p>
              <p style={{ 
                color: isDarkMode ? '#bdc3c7' : '#7f8c8d', 
                marginTop: '10px' 
              }}>Add some delicious items to get started!</p>
            </div>
          ) : (
            <>
              <div style={{ flex: 1, padding: '20px' }}>
                {cartItems.map((item) => (
                  <div key={item.id} style={{
                    display: 'flex',
                    gap: '15px',
                    padding: '15px 0',
                    borderBottom: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#eee'}`
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
                      <h4 style={{ 
                        margin: '0 0 5px 0', 
                        color: isDarkMode ? '#ffffff' : '#2c3e50' 
                      }}>{item.name}</h4>
                      <div style={{ 
                        fontWeight: '600', 
                        color: isDarkMode ? '#f39c12' : '#d35400' 
                      }}>ETB {item.price.toFixed(2)}</div>
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
                        background: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#fef5e7',
                        borderRadius: '20px',
                        padding: '5px'
                      }}>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          style={{
                            background: isDarkMode ? '#f39c12' : '#d35400',
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
                            e.target.style.background = isDarkMode ? '#e67e22' : '#c0392b';
                            e.target.style.transform = 'scale(1.1)';
                          }}
                          onMouseOut={(e) => {
                            e.target.style.background = isDarkMode ? '#f39c12' : '#d35400';
                            e.target.style.transform = 'scale(1)';
                          }}
                        >
                          -
                        </button>
                        <span style={{
                          minWidth: '20px',
                          textAlign: 'center',
                          fontWeight: '600',
                          color: isDarkMode ? '#ffffff' : '#2c3e50'
                        }}>
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          style={{
                            background: isDarkMode ? '#f39c12' : '#d35400',
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
                            e.target.style.background = isDarkMode ? '#e67e22' : '#c0392b';
                            e.target.style.transform = 'scale(1.1)';
                          }}
                          onMouseOut={(e) => {
                            e.target.style.background = isDarkMode ? '#f39c12' : '#d35400';
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
                
                {/* Customer Information Form */}
                <div style={{
                  marginTop: '30px',
                  padding: '20px',
                  background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#f8f9fa',
                  borderRadius: '15px',
                  border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#ecf0f1'}`
                }}>
                  <h3 style={{
                    color: isDarkMode ? '#f39c12' : '#d35400',
                    marginBottom: '20px',
                    fontSize: '1.3rem',
                    fontFamily: 'Playfair Display, serif'
                  }}>Delivery Information</h3>
                  
                  <div style={{ marginBottom: '15px' }}>
                    <input
                      type="text"
                      placeholder="Full Name *"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '12px 15px',
                        borderRadius: '8px',
                        border: `2px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#ecf0f1'}`,
                        background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#ffffff',
                        color: isDarkMode ? '#ffffff' : '#2c3e50',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  
                  <div style={{ marginBottom: '15px' }}>
                    <input
                      type="email"
                      placeholder="Email Address *"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '12px 15px',
                        borderRadius: '8px',
                        border: `2px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#ecf0f1'}`,
                        background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#ffffff',
                        color: isDarkMode ? '#ffffff' : '#2c3e50',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  
                  <div style={{ marginBottom: '15px' }}>
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '12px 15px',
                        borderRadius: '8px',
                        border: `2px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#ecf0f1'}`,
                        background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#ffffff',
                        color: isDarkMode ? '#ffffff' : '#2c3e50',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  
                  <div style={{ marginBottom: '15px' }}>
                    <textarea
                      placeholder="Delivery Address"
                      value={customerInfo.address}
                      onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '12px 15px',
                        borderRadius: '8px',
                        border: `2px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#ecf0f1'}`,
                        background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#ffffff',
                        color: isDarkMode ? '#ffffff' : '#2c3e50',
                        fontSize: '1rem',
                        minHeight: '80px',
                        resize: 'vertical'
                      }}
                    />
                  </div>
                  
                  <div style={{ marginBottom: '15px' }}>
                    <textarea
                      placeholder="Special Instructions (Optional)"
                      value={customerInfo.notes}
                      onChange={(e) => setCustomerInfo({...customerInfo, notes: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '12px 15px',
                        borderRadius: '8px',
                        border: `2px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#ecf0f1'}`,
                        background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#ffffff',
                        color: isDarkMode ? '#ffffff' : '#2c3e50',
                        fontSize: '1rem',
                        minHeight: '60px',
                        resize: 'vertical'
                      }}
                    />
                  </div>
                </div>
              </div>
              
              <div style={{
                padding: '20px',
                borderTop: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#eee'}`,
                background: isDarkMode ? '#34495e' : '#fef5e7'
              }}>
                <div style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  color: isDarkMode ? '#ffffff' : '#2c3e50',
                  marginBottom: '15px',
                  textAlign: 'center'
                }}>
                  <strong>Total: ETB {getTotalPrice().toFixed(2)}</strong>
                </div>
                <button 
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  style={{
                    width: '100%',
                    padding: '15px',
                    background: isCheckingOut 
                      ? (isDarkMode ? '#7f8c8d' : '#bdc3c7')
                      : 'linear-gradient(135deg, #d35400, #e67e22)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: isCheckingOut ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    marginBottom: '10px'
                  }}
                  onMouseOver={(e) => {
                    if (!isCheckingOut) {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.12)';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!isCheckingOut) {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }
                  }}
                >
                  {isCheckingOut ? '🔄 Placing Order...' : '🛒 Place Order'}
                </button>
                <button 
                  onClick={clearCart}
                  style={{
                    width: '100%',
                    padding: '10px',
                    background: 'transparent',
                    color: isDarkMode ? '#bdc3c7' : '#7f8c8d',
                    border: `1px solid ${isDarkMode ? '#bdc3c7' : '#7f8c8d'}`,
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
                    e.target.style.borderColor = isDarkMode ? '#bdc3c7' : '#7f8c8d';
                    e.target.style.color = isDarkMode ? '#bdc3c7' : '#7f8c8d';
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