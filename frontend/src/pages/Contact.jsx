import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('Thank you! Your message has been sent successfully.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{
      backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
      color: isDarkMode ? '#ffffff' : '#2c3e50',
      minHeight: '100vh'
    }}>
      <section className="contact-hero" style={{
        background: isDarkMode 
          ? 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)' 
          : 'linear-gradient(135deg, #d35400 0%, #e67e22 100%)',
        padding: '120px 0 80px',
        color: 'white'
      }}>
        <div className="container text-center">
          <h1 className="hero-title text-white" style={{
            fontSize: '4rem',
            marginBottom: '1.5rem',
            fontFamily: 'Playfair Display, serif'
          }}>Contact Us</h1>
          <p className="hero-subtitle text-white" style={{
            fontSize: '1.3rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Get in touch for reservations, catering, or any questions
          </p>
        </div>
      </section>

      <section className="contact-section" style={{
        padding: '100px 0',
        backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff'
      }}>
        <div className="container">
          <div className="contact-wrapper" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start'
          }}>
            <div className="contact-info">
              <h2 style={{
                fontSize: '3rem',
                color: isDarkMode ? '#ffffff' : '#2c3e50',
                marginBottom: '2rem',
                fontFamily: 'Playfair Display, serif'
              }}>Get In Touch</h2>
              <p className="contact-desc" style={{
                fontSize: '1.2rem',
                color: isDarkMode ? '#bdc3c7' : '#7f8c8d',
                lineHeight: '1.7',
                marginBottom: '3rem'
              }}>
                We'd love to hear from you! Whether you want to make a reservation, 
                inquire about catering, or just say hello, don't hesitate to reach out.
              </p>

              <div className="info-item" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                marginBottom: '2rem',
                padding: '25px',
                background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#f8f9fa',
                borderRadius: '15px',
                border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'transparent'}`
              }}>
                <div className="info-icon" style={{ fontSize: '2rem' }}>📍</div>
                <div className="info-content">
                  <h4 style={{
                    fontSize: '1.3rem',
                    color: isDarkMode ? '#f39c12' : '#d35400',
                    marginBottom: '0.5rem',
                    fontWeight: '600'
                  }}>Visit Us</h4>
                  <p style={{
                    color: isDarkMode ? '#bdc3c7' : '#7f8c8d',
                    fontSize: '1.1rem',
                    lineHeight: '1.5'
                  }}>123 Ethiopian Street<br />City, State 12345</p>
                </div>
              </div>

              <div className="info-item" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                marginBottom: '2rem',
                padding: '25px',
                background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#f8f9fa',
                borderRadius: '15px',
                border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'transparent'}`
              }}>
                <div className="info-icon" style={{ fontSize: '2rem' }}>📞</div>
                <div className="info-content">
                  <h4 style={{
                    fontSize: '1.3rem',
                    color: isDarkMode ? '#f39c12' : '#d35400',
                    marginBottom: '0.5rem',
                    fontWeight: '600'
                  }}>Call Us</h4>
                  <p style={{
                    color: isDarkMode ? '#bdc3c7' : '#7f8c8d',
                    fontSize: '1.1rem',
                    lineHeight: '1.5'
                  }}>(555) 123-4567<br />Available daily 11 AM - 10 PM</p>
                </div>
              </div>

              <div className="info-item" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                marginBottom: '2rem',
                padding: '25px',
                background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#f8f9fa',
                borderRadius: '15px',
                border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'transparent'}`
              }}>
                <div className="info-icon" style={{ fontSize: '2rem' }}>✉️</div>
                <div className="info-content">
                  <h4 style={{
                    fontSize: '1.3rem',
                    color: isDarkMode ? '#f39c12' : '#d35400',
                    marginBottom: '0.5rem',
                    fontWeight: '600'
                  }}>Email Us</h4>
                  <p style={{
                    color: isDarkMode ? '#bdc3c7' : '#7f8c8d',
                    fontSize: '1.1rem',
                    lineHeight: '1.5'
                  }}>info@mesobrestaurant.com<br />We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="info-item" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                marginBottom: '3rem',
                padding: '25px',
                background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#f8f9fa',
                borderRadius: '15px',
                border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'transparent'}`
              }}>
                <div className="info-icon" style={{ fontSize: '2rem' }}>🕒</div>
                <div className="info-content">
                  <h4 style={{
                    fontSize: '1.3rem',
                    color: isDarkMode ? '#f39c12' : '#d35400',
                    marginBottom: '0.5rem',
                    fontWeight: '600'
                  }}>Opening Hours</h4>
                  <p style={{
                    color: isDarkMode ? '#bdc3c7' : '#7f8c8d',
                    fontSize: '1.1rem',
                    lineHeight: '1.5'
                  }}>Monday - Sunday<br />11:00 AM - 10:00 PM</p>
                </div>
              </div>

              <div className="social-links">
                <h4 style={{
                  fontSize: '1.5rem',
                  color: isDarkMode ? '#f39c12' : '#d35400',
                  marginBottom: '1rem',
                  fontWeight: '600'
                }}>Follow Us</h4>
                <div className="social-icons" style={{
                  display: 'flex',
                  gap: '15px'
                }}>
                  <a href="#" target="_blank" rel="noopener noreferrer" style={{
                    padding: '12px',
                    background: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#f8f9fa',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'transparent'}`
                  }}>
                    <img src="https://img.icons8.com/fluent/40/000000/facebook-new.png" alt="Facebook" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" style={{
                    padding: '12px',
                    background: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#f8f9fa',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'transparent'}`
                  }}>
                    <img src="https://img.icons8.com/fluent/40/000000/instagram-new.png" alt="Instagram" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" style={{
                    padding: '12px',
                    background: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#f8f9fa',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'transparent'}`
                  }}>
                    <img src="https://img.icons8.com/fluent/40/000000/twitter.png" alt="Twitter" />
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit} style={{
                background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#ffffff',
                padding: '40px',
                borderRadius: '20px',
                boxShadow: isDarkMode ? '0 15px 35px rgba(0,0,0,0.3)' : '0 15px 35px rgba(0,0,0,0.1)',
                border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'transparent'}`
              }}>
                <h3 style={{
                  fontSize: '2rem',
                  color: isDarkMode ? '#ffffff' : '#2c3e50',
                  marginBottom: '2rem',
                  fontFamily: 'Playfair Display, serif'
                }}>Send us a Message</h3>
                
                <div className="form-row" style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '20px',
                  marginBottom: '20px'
                }}>
                  <div className="form-group">
                    <label htmlFor="firstName" style={{
                      display: 'block',
                      marginBottom: '8px',
                      color: isDarkMode ? '#f39c12' : '#d35400',
                      fontWeight: '600'
                    }}>First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '15px',
                        borderRadius: '10px',
                        border: `2px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#ecf0f1'}`,
                        background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#ffffff',
                        color: isDarkMode ? '#ffffff' : '#2c3e50',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName" style={{
                      display: 'block',
                      marginBottom: '8px',
                      color: isDarkMode ? '#f39c12' : '#d35400',
                      fontWeight: '600'
                    }}>Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '15px',
                        borderRadius: '10px',
                        border: `2px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#ecf0f1'}`,
                        background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#ffffff',
                        color: isDarkMode ? '#ffffff' : '#2c3e50',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  </div>
                </div>

                <div className="form-row" style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '20px',
                  marginBottom: '20px'
                }}>
                  <div className="form-group">
                    <label htmlFor="email" style={{
                      display: 'block',
                      marginBottom: '8px',
                      color: isDarkMode ? '#f39c12' : '#d35400',
                      fontWeight: '600'
                    }}>Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '15px',
                        borderRadius: '10px',
                        border: `2px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#ecf0f1'}`,
                        background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#ffffff',
                        color: isDarkMode ? '#ffffff' : '#2c3e50',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" style={{
                      display: 'block',
                      marginBottom: '8px',
                      color: isDarkMode ? '#f39c12' : '#d35400',
                      fontWeight: '600'
                    }}>Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '15px',
                        borderRadius: '10px',
                        border: `2px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#ecf0f1'}`,
                        background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#ffffff',
                        color: isDarkMode ? '#ffffff' : '#2c3e50',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label htmlFor="subject" style={{
                    display: 'block',
                    marginBottom: '8px',
                    color: isDarkMode ? '#f39c12' : '#d35400',
                    fontWeight: '600'
                  }}>Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '15px',
                      borderRadius: '10px',
                      border: `2px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#ecf0f1'}`,
                      background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#ffffff',
                      color: isDarkMode ? '#ffffff' : '#2c3e50',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <option value="">Select a subject</option>
                    <option value="reservation">Table Reservation</option>
                    <option value="catering">Catering Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="general">General Question</option>
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: '30px' }}>
                  <label htmlFor="message" style={{
                    display: 'block',
                    marginBottom: '8px',
                    color: isDarkMode ? '#f39c12' : '#d35400',
                    fontWeight: '600'
                  }}>Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    required
                    style={{
                      width: '100%',
                      padding: '15px',
                      borderRadius: '10px',
                      border: `2px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#ecf0f1'}`,
                      background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#ffffff',
                      color: isDarkMode ? '#ffffff' : '#2c3e50',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      minHeight: '120px',
                      resize: 'vertical'
                    }}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-block"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '18px',
                    borderRadius: '50px',
                    border: 'none',
                    background: 'linear-gradient(135deg, #d35400, #e67e22)',
                    color: 'white',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitMessage && (
                  <div className={`submit-message ${submitMessage.includes('Thank you') ? 'success' : 'error'}`} style={{
                    marginTop: '20px',
                    padding: '15px',
                    borderRadius: '10px',
                    textAlign: 'center',
                    fontWeight: '600',
                    background: submitMessage.includes('Thank you') 
                      ? (isDarkMode ? 'rgba(46, 204, 113, 0.2)' : 'rgba(46, 204, 113, 0.1)')
                      : (isDarkMode ? 'rgba(231, 76, 60, 0.2)' : 'rgba(231, 76, 60, 0.1)'),
                    color: submitMessage.includes('Thank you') 
                      ? (isDarkMode ? '#2ecc71' : '#27ae60')
                      : (isDarkMode ? '#e74c3c' : '#c0392b'),
                    border: `1px solid ${submitMessage.includes('Thank you') 
                      ? (isDarkMode ? 'rgba(46, 204, 113, 0.3)' : 'rgba(46, 204, 113, 0.2)')
                      : (isDarkMode ? 'rgba(231, 76, 60, 0.3)' : 'rgba(231, 76, 60, 0.2)')}`
                  }}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;