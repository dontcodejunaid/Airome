import React from 'react';

export default function PricingPlans({ onSelectPlan }) {
  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Pricing Plan</h2>
        </div>

        <div className="pricing-cards-grid">
          {/* Company A */}
          <div className="pricing-card-wrapper">
            <div className="pricing-card-main">
              <h4 className="pricing-tier-name">Company A</h4>
              <div className="pricing-price-box">
                <span className="pricing-price">$120</span>
                <span className="pricing-unit">/ride</span>
              </div>
              <div className="pricing-duration">2 Days</div>

              <ul className="pricing-features-list">
                <li className="pricing-feature-item included">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Full Paris Sideseen</span>
                </li>
                <li className="pricing-feature-item included">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Fuel & Gas included</span>
                </li>
                <li className="pricing-feature-item included">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Driver included</span>
                </li>
                <li className="pricing-feature-item excluded">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  <span>Insurance</span>
                </li>
                <li className="pricing-feature-item excluded">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  <span>Cancellation</span>
                </li>
              </ul>
            </div>
            <button 
              className="pricing-card-backdrop purple"
              onClick={() => onSelectPlan && onSelectPlan({ name: 'Company A', price: 120, duration: '2 Days' })}
            >
              BOOK NOW
            </button>
          </div>

          {/* Company B */}
          <div className="pricing-card-wrapper">
            <div className="pricing-card-main">
              <h4 className="pricing-tier-name">Company B</h4>
              <div className="pricing-price-box">
                <span className="pricing-price">$150</span>
                <span className="pricing-unit">/ride</span>
              </div>
              <div className="pricing-duration">3 Days</div>

              <ul className="pricing-features-list">
                <li className="pricing-feature-item included">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>1 car for Daylong</span>
                </li>
                <li className="pricing-feature-item included">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Driver included</span>
                </li>
                <li className="pricing-feature-item included">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Fuel & Gas included</span>
                </li>
                <li className="pricing-feature-item excluded">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  <span>Extra Route</span>
                </li>
                <li className="pricing-feature-item excluded">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  <span>Car Damage cost</span>
                </li>
              </ul>
            </div>
            <button 
              className="pricing-card-backdrop mint"
              onClick={() => onSelectPlan && onSelectPlan({ name: 'Company B', price: 150, duration: '3 Days' })}
            >
              BOOK NOW
            </button>
          </div>

          {/* Company C */}
          <div className="pricing-card-wrapper">
            <div className="pricing-card-main">
              <h4 className="pricing-tier-name">Company C</h4>
              <div className="pricing-price-box">
                <span className="pricing-price">$200</span>
                <span className="pricing-unit">/ride</span>
              </div>
              <div className="pricing-duration">5 Days</div>

              <ul className="pricing-features-list">
                <li className="pricing-feature-item included">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>1 car for full day</span>
                </li>
                <li className="pricing-feature-item included">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Driver included</span>
                </li>
                <li className="pricing-feature-item included">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Fuel & Gas included</span>
                </li>
                <li className="pricing-feature-item excluded">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  <span>Extra Passenger</span>
                </li>
                <li className="pricing-feature-item excluded">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  <span>Car Damage cost</span>
                </li>
              </ul>
            </div>
            <button 
              className="pricing-card-backdrop teal"
              onClick={() => onSelectPlan && onSelectPlan({ name: 'Company C', price: 200, duration: '5 Days' })}
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
