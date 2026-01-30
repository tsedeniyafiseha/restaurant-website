import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const OrderCustomization = ({ item, isOpen, onClose }) => {
  const { addToCart } = useCart();
  const [customizations, setCustomizations] = useState({
    spiceLevel: 'medium',
    portionSize: 'regular',
    specialRequests: ''
  });
  const [quantity, setQuantity] = useState(1);

  const spiceLevels = [
    { value: 'none', label: 'No Spice', icon: '🥛' },
    { value: 'mild', label: 'Mild', icon: '🌶️' },
    { value: 'medium', label: 'Medium', icon: '🌶️🌶️' },
    { value: 'hot', label: 'Hot', icon: '🌶️🌶️🌶️' },
    { value: 'extra-hot', label: 'Extra Hot', icon: '🔥🌶️🔥' }
  ];

  const portionSizes = [
    { value: 'small', label: 'Small', price: -2 },
    { value: 'regular', label: 'Regular', price: 0 },
    { value: 'large', label: 'Large', price: 3 },
    { value: 'extra-large', label: 'Extra Large', price: 5 }
  ];

  const handleCustomizationChange = (key, value) => {
    setCustomizations(prev => ({ ...prev, [key]: value }));
  };

  const calculatePrice = () => {
    const basePrice = item.price;
    const portionPrice = portionSizes.find(p => p.value === customizations.portionSize)?.price || 0;
    return basePrice + portionPrice;
  };

  const handleAddToCart = () => {
    const customizedItem = {
      ...item,
      price: calculatePrice()
    };
    
    addToCart(customizedItem, customizations, quantity);
    onClose();
    
    // Show success message
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `
      <div class="toast-content">
        <span class="toast-icon">✅</span>
        <span class="toast-message">${item.name} added to cart!</span>
      </div>
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.classList.add('toast-show');
    }, 100);
    
    setTimeout(() => {
      toast.classList.remove('toast-show');
      setTimeout(() => document.body.removeChild(toast), 300);
    }, 3000);
  };

  if (!isOpen || !item) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="customization-modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Customize Your Order</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-content">
          <div className="item-preview">
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-info">
              <h3>{item.name}</h3>
              <p className="item-description">{item.description}</p>
              <div className="item-price">${calculatePrice().toFixed(2)}</div>
            </div>
          </div>

          <div className="customization-section">
            <h4>🌶️ Spice Level</h4>
            <div className="spice-options">
              {spiceLevels.map(level => (
                <label key={level.value} className="spice-option">
                  <input
                    type="radio"
                    name="spiceLevel"
                    value={level.value}
                    checked={customizations.spiceLevel === level.value}
                    onChange={(e) => handleCustomizationChange('spiceLevel', e.target.value)}
                  />
                  <span className="spice-label">
                    <span className="spice-icon">{level.icon}</span>
                    {level.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="customization-section">
            <h4>🍽️ Portion Size</h4>
            <div className="portion-options">
              {portionSizes.map(size => (
                <label key={size.value} className="portion-option">
                  <input
                    type="radio"
                    name="portionSize"
                    value={size.value}
                    checked={customizations.portionSize === size.value}
                    onChange={(e) => handleCustomizationChange('portionSize', e.target.value)}
                  />
                  <span className="portion-label">
                    {size.label}
                    {size.price !== 0 && (
                      <span className="price-modifier">
                        {size.price > 0 ? `+$${size.price}` : `$${size.price}`}
                      </span>
                    )}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="customization-section">
            <h4>📝 Special Requests</h4>
            <textarea
              placeholder="Any special requests? (e.g., no onions, extra sauce, etc.)"
              value={customizations.specialRequests}
              onChange={(e) => handleCustomizationChange('specialRequests', e.target.value)}
              className="special-requests"
              rows="3"
            />
          </div>

          <div className="quantity-section">
            <h4>Quantity</h4>
            <div className="quantity-controls">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="quantity-btn"
              >
                -
              </button>
              <span className="quantity-display">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="quantity-btn"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <div className="total-price">
            Total: ${(calculatePrice() * quantity).toFixed(2)}
          </div>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart ({quantity})
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCustomization;