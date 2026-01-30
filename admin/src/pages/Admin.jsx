import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Simple password authentication (in production, use proper auth)
  const ADMIN_PASSWORD = 'admin123'; // Change this to a secure password

  useEffect(() => {
    // Check if already authenticated
    const auth = sessionStorage.getItem('adminAuth');
    if (auth === 'true') {
      setIsAuthenticated(true);
      fetchOrders();
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminAuth', 'true');
      fetchOrders();
    } else {
      alert('Incorrect password!');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('adminAuth');
    setPassword('');
  };

  const fetchOrders = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/orders');
      if (response.ok) {
        const result = await response.json();
        setOrders(result.data || []);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      const response = await fetch(`http://localhost:3001/api/orders/${orderId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        fetchOrders();
        alert('Order status updated successfully!');
      }
    } catch (error) {
      console.error('Error updating order status:', error);
      alert('Failed to update order status');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return '#f39c12';
      case 'confirmed': return '#3498db';
      case 'preparing': return '#e67e22';
      case 'ready': return '#2ecc71';
      case 'delivered': return '#27ae60';
      case 'cancelled': return '#e74c3c';
      default: return '#7f8c8d';
    }
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '20px'
      }}>
        <div style={{
          background: 'white',
          padding: '60px 40px',
          borderRadius: '20px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          maxWidth: '400px',
          width: '100%',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🔐</div>
          <h1 style={{
            fontSize: '2rem',
            color: '#2c3e50',
            marginBottom: '10px',
            fontFamily: 'Playfair Display, serif'
          }}>
            Admin Panel
          </h1>
          <p style={{
            color: '#7f8c8d',
            marginBottom: '30px',
            fontSize: '1rem'
          }}>
            Mesob Restaurant Management
          </p>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '15px 20px',
                borderRadius: '10px',
                border: '2px solid #ecf0f1',
                fontSize: '1rem',
                marginBottom: '20px',
                outline: 'none',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = '#667eea'}
              onBlur={(e) => e.target.style.borderColor = '#ecf0f1'}
            />
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '15px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Login
            </button>
          </form>
          <p style={{
            marginTop: '20px',
            fontSize: '0.9rem',
            color: '#95a5a6'
          }}>
            Default password: admin123
          </p>
        </div>
      </div>
    );
  }

  // Loading Screen
  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{ color: isDarkMode ? '#ffffff' : '#2c3e50', fontSize: '1.5rem' }}>
          Loading orders...
        </div>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: isDarkMode ? '#1a1a1a' : '#f5f5f5',
      color: isDarkMode ? '#ffffff' : '#2c3e50'
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '20px 0',
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h1 style={{
              color: 'white',
              fontSize: '2rem',
              margin: 0,
              fontFamily: 'Playfair Display, serif'
            }}>
              🍽️ Mesob Restaurant Admin
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', margin: '5px 0 0 0' }}>
              Order Management System
            </p>
          </div>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              style={{
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '10px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600'
              }}
            >
              {isDarkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
            <button
              onClick={fetchOrders}
              style={{
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '10px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600'
              }}
            >
              🔄 Refresh
            </button>
            <button
              onClick={handleLogout}
              style={{
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '10px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600'
              }}
            >
              🚪 Logout
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{
        maxWidth: '1200px',
        margin: '30px auto',
        padding: '0 20px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '30px'
        }}>
          <div style={{
            background: isDarkMode ? '#2c3e50' : 'white',
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>📦</div>
            <h3 style={{ color: '#f39c12', margin: '0 0 5px 0' }}>{orders.length}</h3>
            <p style={{ color: isDarkMode ? '#bdc3c7' : '#7f8c8d', margin: 0 }}>Total Orders</p>
          </div>
          <div style={{
            background: isDarkMode ? '#2c3e50' : 'white',
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>⏳</div>
            <h3 style={{ color: '#f39c12', margin: '0 0 5px 0' }}>
              {orders.filter(o => o.status === 'pending').length}
            </h3>
            <p style={{ color: isDarkMode ? '#bdc3c7' : '#7f8c8d', margin: 0 }}>Pending</p>
          </div>
          <div style={{
            background: isDarkMode ? '#2c3e50' : 'white',
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>✅</div>
            <h3 style={{ color: '#2ecc71', margin: '0 0 5px 0' }}>
              {orders.filter(o => o.status === 'delivered').length}
            </h3>
            <p style={{ color: isDarkMode ? '#bdc3c7' : '#7f8c8d', margin: 0 }}>Delivered</p>
          </div>
          <div style={{
            background: isDarkMode ? '#2c3e50' : 'white',
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>💰</div>
            <h3 style={{ color: '#2ecc71', margin: '0 0 5px 0' }}>
              ETB {orders.reduce((sum, o) => sum + parseFloat(o.total_amount), 0).toFixed(2)}
            </h3>
            <p style={{ color: isDarkMode ? '#bdc3c7' : '#7f8c8d', margin: 0 }}>Total Revenue</p>
          </div>
        </div>

        {/* Orders List */}
        {orders.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            background: isDarkMode ? '#2c3e50' : 'white',
            borderRadius: '20px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px', opacity: 0.5 }}>📋</div>
            <h3 style={{ color: isDarkMode ? '#ffffff' : '#2c3e50' }}>No orders yet</h3>
            <p style={{ color: isDarkMode ? '#bdc3c7' : '#7f8c8d' }}>
              Orders will appear here when customers place them
            </p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '25px'
          }}>
            {orders.map((order) => (
              <div key={order.id} style={{
                background: isDarkMode ? '#2c3e50' : 'white',
                borderRadius: '20px',
                padding: '25px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                border: `2px solid ${getStatusColor(order.status)}20`
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px'
                }}>
                  <h3 style={{
                    color: isDarkMode ? '#ffffff' : '#2c3e50',
                    margin: 0,
                    fontSize: '1.3rem'
                  }}>
                    Order #{order.id}
                  </h3>
                  <div style={{
                    background: getStatusColor(order.status),
                    color: 'white',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    textTransform: 'capitalize'
                  }}>
                    {order.status}
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{
                    color: '#f39c12',
                    marginBottom: '10px',
                    fontSize: '1.1rem'
                  }}>Customer Information</h4>
                  <p style={{ margin: '5px 0', color: isDarkMode ? '#bdc3c7' : '#7f8c8d' }}>
                    <strong>Name:</strong> {order.customer_name}
                  </p>
                  <p style={{ margin: '5px 0', color: isDarkMode ? '#bdc3c7' : '#7f8c8d' }}>
                    <strong>Email:</strong> {order.customer_email}
                  </p>
                  <p style={{ margin: '5px 0', color: isDarkMode ? '#bdc3c7' : '#7f8c8d' }}>
                    <strong>Phone:</strong> {order.customer_phone}
                  </p>
                  {order.customer_address && (
                    <p style={{ margin: '5px 0', color: isDarkMode ? '#bdc3c7' : '#7f8c8d' }}>
                      <strong>Address:</strong> {order.customer_address}
                    </p>
                  )}
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{
                    color: '#f39c12',
                    marginBottom: '10px',
                    fontSize: '1.1rem'
                  }}>Order Items</h4>
                  {JSON.parse(order.items).map((item, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '8px 0',
                      borderBottom: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#ecf0f1'}`
                    }}>
                      <span style={{ color: isDarkMode ? '#bdc3c7' : '#7f8c8d' }}>
                        {item.name} x{item.quantity}
                      </span>
                      <span style={{
                        color: '#f39c12',
                        fontWeight: '600'
                      }}>
                        ETB {(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px',
                  padding: '15px',
                  background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#f8f9fa',
                  borderRadius: '10px'
                }}>
                  <strong style={{
                    fontSize: '1.2rem',
                    color: isDarkMode ? '#ffffff' : '#2c3e50'
                  }}>
                    Total: ETB {parseFloat(order.total_amount).toFixed(2)}
                  </strong>
                  <span style={{
                    color: isDarkMode ? '#bdc3c7' : '#7f8c8d',
                    fontSize: '0.9rem'
                  }}>
                    {new Date(order.created_at).toLocaleString()}
                  </span>
                </div>

                {order.notes && (
                  <div style={{ marginBottom: '20px' }}>
                    <h4 style={{
                      color: '#f39c12',
                      marginBottom: '10px',
                      fontSize: '1.1rem'
                    }}>Special Instructions</h4>
                    <p style={{
                      color: isDarkMode ? '#bdc3c7' : '#7f8c8d',
                      fontStyle: 'italic',
                      padding: '10px',
                      background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#f8f9fa',
                      borderRadius: '8px'
                    }}>
                      {order.notes}
                    </p>
                  </div>
                )}

                <div style={{
                  display: 'flex',
                  gap: '10px',
                  flexWrap: 'wrap'
                }}>
                  {['pending', 'confirmed', 'preparing', 'ready', 'delivered'].map((status) => (
                    <button
                      key={status}
                      onClick={() => updateOrderStatus(order.id, status)}
                      disabled={order.status === status}
                      style={{
                        padding: '8px 16px',
                        borderRadius: '20px',
                        border: 'none',
                        background: order.status === status 
                          ? getStatusColor(status)
                          : (isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#ecf0f1'),
                        color: order.status === status 
                          ? 'white' 
                          : (isDarkMode ? '#bdc3c7' : '#7f8c8d'),
                        cursor: order.status === status ? 'not-allowed' : 'pointer',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        textTransform: 'capitalize',
                        transition: 'all 0.3s ease',
                        opacity: order.status === status ? 1 : 0.7
                      }}
                      onMouseOver={(e) => {
                        if (order.status !== status) {
                          e.target.style.background = getStatusColor(status);
                          e.target.style.color = 'white';
                          e.target.style.opacity = '1';
                        }
                      }}
                      onMouseOut={(e) => {
                        if (order.status !== status) {
                          e.target.style.background = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#ecf0f1';
                          e.target.style.color = isDarkMode ? '#bdc3c7' : '#7f8c8d';
                          e.target.style.opacity = '0.7';
                        }
                      }}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
