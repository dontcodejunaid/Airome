import React from 'react';

export default function VehicleCard({ vehicle, onBookNow }) {
  return (
    <div className="vehicle-card">
      <div className="vehicle-card-img-box">
        <img 
          className="vehicle-card-img" 
          src={vehicle.angles ? vehicle.angles[0] : vehicle.image} 
          alt={vehicle.name} 
        />
      </div>
      <div className="vehicle-card-body">
        <h3 className="vehicle-card-title">{vehicle.name}</h3>
        <div className="vehicle-card-price">
          <span className="amount">${vehicle.price.toFixed(2)}</span>
          <span className="unit">/day</span>
        </div>
        <div className="vehicle-card-features">
          <div className="vehicle-feature-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9C2.1 11.1 2 11.6 2 12v4c0 .6.4 1 1 1h2"></path>
              <circle cx="7" cy="17" r="2"></circle>
              <circle cx="17" cy="17" r="2"></circle>
            </svg>
            <span>{vehicle.type || 'SUV'}</span>
          </div>
          <div className="vehicle-feature-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>{vehicle.transmission || 'Auto'}</span>
          </div>
          <div className="vehicle-feature-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 22v-8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8"></path>
              <path d="M13 14h6a2 2 0 0 1 2 2v6"></path>
            </svg>
            <span>{vehicle.fuel || 'Petrol'}</span>
          </div>
        </div>
        <button className="btn btn-book-vehicle" onClick={() => onBookNow(vehicle)}>
          BOOK NOW
        </button>
      </div>
    </div>
  );
}
