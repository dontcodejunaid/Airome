import React, { useState } from 'react';
import { storageService } from '../services/storageService';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

export default function BookingModal({ vehicle, onClose }) {
  const { currentUser } = useAuth();
  const { showToast } = useToast();
  const [days, setDays] = useState(2);
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [name, setName] = useState(currentUser?.firstName ? `${currentUser.firstName} ${currentUser.lastName || ''}` : 'John Doe');
  const [email, setEmail] = useState(currentUser?.email || 'demo@example.com');
  const [phone, setPhone] = useState(currentUser?.mobile || '+91 9994585226');

  if (!vehicle) return null;

  const totalPrice = (vehicle.price * days).toFixed(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    storageService.createBooking({
      vehicleId: vehicle.id,
      vehicleName: vehicle.name,
      pricePerDay: vehicle.price,
      days,
      startDate,
      customerName: name,
      email,
      phone
    });

    showToast(`Booking confirmed for ${vehicle.name}! Total: $${totalPrice}`, 'success');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', marginBottom: '8px' }}>
          Book {vehicle.name}
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
          Daily Rate: <strong style={{ color: '#fff' }}>${vehicle.price.toFixed(2)}/day</strong> • {vehicle.seats} • {vehicle.transmission}
        </p>

        <form onSubmit={handleSubmit} className="booking-modal-form" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="booking-modal-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
            <div className="form-group">
              <label className="form-label" style={{ color: '#ddd' }}>Rental Days</label>
              <input 
                type="number" 
                min="1" 
                max="30"
                className="form-control" 
                value={days} 
                onChange={(e) => setDays(Math.max(1, parseInt(e.target.value) || 1))} 
                required 
              />
            </div>
            <div className="form-group">
              <label className="form-label" style={{ color: '#ddd' }}>Start Date</label>
              <input 
                type="date" 
                className="form-control" 
                value={startDate} 
                onChange={(e) => setStartDate(e.target.value)} 
                required 
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" style={{ color: '#ddd' }}>Full Name</label>
            <input 
              type="text" 
              className="form-control" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>

          <div className="booking-modal-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
            <div className="form-group">
              <label className="form-label" style={{ color: '#ddd' }}>Email Address</label>
              <input 
                type="email" 
                className="form-control" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div className="form-group">
              <label className="form-label" style={{ color: '#ddd' }}>Phone Number</label>
              <input 
                type="tel" 
                className="form-control" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                required 
              />
            </div>
          </div>

          <div style={{ 
            background: 'rgba(255, 255, 255, 0.05)', 
            padding: '16px', 
            borderRadius: 'var(--radius-sm)', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginTop: '8px'
          }}>
            <span style={{ color: 'var(--text-muted)' }}>Estimated Total</span>
            <span style={{ fontSize: '1.4rem', fontWeight: '800', color: '#fff' }}>${totalPrice}</span>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '12px' }}>
            Confirm Reservation
          </button>
        </form>
      </div>
    </div>
  );
}
