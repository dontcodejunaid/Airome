import React, { useState, useEffect } from 'react';
import { storageService } from '../services/storageService';

export default function FleetShowcase({ onBookNow }) {
  const [vehicles, setVehicles] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [angleIdx, setAngleIdx] = useState(0);

  useEffect(() => {
    const data = storageService.getVehicles();
    setVehicles(data);
  }, []);

  const vehicle = vehicles[currentIdx] || vehicles[0];

  const handlePrev = () => {
    setCurrentIdx(prev => (prev - 1 + vehicles.length) % vehicles.length);
    setAngleIdx(0);
  };

  const handleNext = () => {
    setCurrentIdx(prev => (prev + 1) % vehicles.length);
    setAngleIdx(0);
  };

  return (
    <section className="fleet-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Rental Fleet</h2>
          <p className="section-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {vehicle && (
          <div className="fleet-showcase-container">
            {/* Vertical Thumbnails */}
            <div className="fleet-thumbnails-list">
              {(vehicle.angles || ['/fleet/vw-california.jpg']).map((imgUrl, idx) => (
                <div 
                  key={idx} 
                  className={`fleet-thumb-item ${idx === angleIdx ? 'active' : ''}`}
                  onClick={() => setAngleIdx(idx)}
                >
                  <img src={imgUrl} alt={`${vehicle.name} angle ${idx + 1}`} />
                </div>
              ))}
            </div>

            {/* Main Center Preview */}
            <div className="fleet-main-preview">
              <img 
                className="fleet-main-img" 
                src={(vehicle.angles && vehicle.angles[angleIdx]) || (vehicle.angles && vehicle.angles[0]) || '/fleet/vw-california.jpg'} 
                alt={vehicle.name} 
              />
            </div>

            {/* Specs & Price Details */}
            <div className="fleet-details-panel">
              <h3 className="fleet-model-title">{vehicle.name}</h3>

              <div className="fleet-specs-list">
                <div className="fleet-spec-row">
                  <div className="fleet-spec-name">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9C2.1 11.1 2 11.6 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle></svg>
                    Model:
                  </div>
                  <div className="fleet-spec-val">{vehicle.model}</div>
                </div>

                <div className="fleet-spec-row">
                  <div className="fleet-spec-name">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
                    Doors:
                  </div>
                  <div className="fleet-spec-val">{vehicle.doors}</div>
                </div>

                <div className="fleet-spec-row">
                  <div className="fleet-spec-name">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    Seats:
                  </div>
                  <div className="fleet-spec-val">{vehicle.seatsNum || 3}</div>
                </div>

                <div className="fleet-spec-row">
                  <div className="fleet-spec-name">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    Transmission:
                  </div>
                  <div className="fleet-spec-val">{vehicle.transmission}</div>
                </div>
              </div>

              <div className="fleet-price-row">
                <span className="fleet-price-amount">${vehicle.price.toFixed(2)}</span>
                <span className="fleet-price-period">/day</span>
              </div>

              <button className="btn btn-primary" onClick={() => onBookNow(vehicle)}>
                Book Now
              </button>
            </div>
          </div>
        )}

        {/* Carousel controls */}
        <div className="fleet-controls-bar">
          <button className="slider-btn" onClick={handlePrev} aria-label="Previous Vehicle">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <div className="slider-dots">
            {vehicles.map((_, idx) => (
              <div 
                key={idx} 
                className={`slider-dot ${idx === currentIdx ? 'active' : ''}`}
                onClick={() => { setCurrentIdx(idx); setAngleIdx(0); }}
              />
            ))}
          </div>
          <button className="slider-btn" onClick={handleNext} aria-label="Next Vehicle">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
