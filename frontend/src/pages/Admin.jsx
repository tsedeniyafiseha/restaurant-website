import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const Admin = () => {
  const { isDarkMode } = useTheme();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

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
        fetchOrders(); // Refresh orders
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

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
      color: isDarkMode ? '#ffffff' : '#2c3e50',
      padding: '40px 20px'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{
          fontSize: '3rem',
          marginBottom: '2rem',
          textAlign: 'center',
          color: isDarkMode ? '#f39c12' : '#d35400',
          fontFamily: 'Playfair Display, serif'
        }}>
          Restaurant Admin - Orders
        </h1>

        {orders.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            background: isDarkMode ? '#2c3e50' : '#f8f9fa',
            borderRadius: '20px'
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
            gap: '30px'
          }}>
            {orders.map((order) => (
              <div key={order.id} style={{
                background: isDarkMode ? '#2c3e50' : '#ffffff',
                borderRadius: '20px',
                padding: '25px',
                boxShadow: isDarkMode ? '0 15px 35px rgba(0,0,0,0.3)' : '0 15px 35px rgba(0,0,0,0.1)',
                border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#ecf0f1'}`
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
                    padding: '5px 15px',
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
                    color: isDarkMode ? '#f39c12' : '#d35400',
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
                    color: isDarkMode ? '#f39c12' : '#d35400',
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
                        color: isDarkMode ? '#f39c12' : '#d35400',
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
                      color: isDarkMode ? '#f39c12' : '#d35400',
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