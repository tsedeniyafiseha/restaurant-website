import React, { useState } from 'react';

const TableReservation = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    seatingPreference: 'indoor',
    specialRequests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const timeSlots = [
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
    '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
    '9:00 PM', '9:30 PM'
  ];

  const getBestTimeRecommendation = () => {
    const recommendations = [
      { time: '12:00 PM - 2:00 PM', reason: 'Perfect for lunch with natural lighting' },
      { time: '6:00 PM - 8:00 PM', reason: 'Prime dinner time with great ambiance' },
      { time: '3:00 PM - 5:00 PM', reason: 'Quiet afternoon, perfect for conversations' }
    ];
    return recommendations[Math.floor(Math.random() * recommendations.length)];
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success popup
      const popup = document.createElement('div');
      popup.className = 'reservation-success-popup';
      popup.innerHTML = `
        <div class="popup-content">
          <div class="success-icon">🎉</div>
          <h3>Reservation Confirmed!</h3>
          <p>Thank you ${formData.name}!</p>
          <p>Your table for ${formData.guests} is reserved for ${formData.date} at ${formData.time}</p>
          <p>We'll send a confirmation to ${formData.email}</p>
          <button onclick="this.parentElement.parentElement.remove()" class="popup-close-btn">
            Great! 👍
          </button>
        </div>
      `;
      document.body.appendChild(popup);
      
      setTimeout(() => {
        popup.classList.add('popup-show');
      }, 100);

      // Reset form and close modal
      setFormData({
        name: '', email: '', phone: '', date: '', time: '',
        guests: 2, seatingPreference: 'indoor', specialRequests: ''
      });
      onClose();
      
    } catch (error) {
      alert('Error making reservation. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const recommendation = getBestTimeRecommendation();

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="reservation-modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>🍽️ Reserve Your Table</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>

        <div className="best-time-suggestion">
          <div className="suggestion-icon">💡</div>
          <div className="suggestion-content">
            <strong>Best Time to Visit:</strong> {recommendation.time}
            <br />
            <small>{recommendation.reason}</small>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="reservation-form">
          <div className="form-row">
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div className="form-group">
              <label>Number of Guests *</label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
                required
              >
                {[1,2,3,4,5,6,7,8,9,10].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Date *</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div className="form-group">
              <label>Time *</label>
              <select
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                required
              >
                <option value="">Select time</option>
                {timeSlots.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Seating Preference</label>
            <div className="seating-options">
              <label className="radio-option">
                <input
                  type="radio"
                  name="seatingPreference"
                  value="indoor"
                  checked={formData.seatingPreference === 'indoor'}
                  onChange={handleInputChange}
                />
                <span className="radio-label">
                  🏠 Indoor (Air-conditioned, cozy atmosphere)
                </span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="seatingPreference"
                  value="outdoor"
                  checked={formData.seatingPreference === 'outdoor'}
                  onChange={handleInputChange}
                />
                <span className="radio-label">
                  🌿 Outdoor (Fresh air, garden view)
                </span>
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Special Requests</label>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleInputChange}
              placeholder="Birthday celebration, dietary restrictions, accessibility needs, etc."
              rows="3"
            />
          </div>

          <button 
            type="submit" 
            className="reservation-submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Reserving...' : 'Confirm Reservation 🎉'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TableReservation;