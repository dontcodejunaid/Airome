import React, { useState } from 'react';
import { storageService } from '../services/storageService';
import { useToast } from '../context/ToastContext';

export default function NewsletterCard() {
  const [email, setEmail] = useState('');
  const { showToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }
    storageService.subscribeNewsletter(email);
    showToast('Thank you for subscribing to Airoame updates!', 'success');
    setEmail('');
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-card">
          <h3 className="newsletter-title">Join Our Adventure Club</h3>
          <p className="newsletter-desc">
            Subscribe to receive exclusive seasonal discounts, curated off-grid travel itineraries, and early access to newly added luxury expedition vehicles.
          </p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              className="newsletter-input" 
              placeholder="Enter your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <button type="submit" className="btn newsletter-btn">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}
