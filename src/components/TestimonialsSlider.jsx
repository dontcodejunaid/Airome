import React, { useState } from 'react';

const testimonialsData = [
  {
    name: 'John Doe',
    role: 'Creative Director',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    quote: 'Airoame made our coastal California road trip an absolute breeze. The camper van was immaculately clean, comfortable, and equipped with everything we needed for an off-grid getaway.'
  },
  {
    name: 'Rebeca Doe',
    role: 'Travel Photographer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    quote: 'Exceptional service and total peace of mind. The vehicle handled mountain terrain effortlessly, and having 24/7 concierge support made all the difference during our trip.'
  },
  {
    name: 'Stella Doe',
    role: 'Product Designer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    quote: 'The booking process was crystal clear with zero unexpected charges. Returning the vehicle was seamless and quick. I highly recommend Airoame to anyone seeking premium travel rentals.'
  },
  {
    name: 'Marcus Vance',
    role: 'Photographer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'Renting a camper through Airoame made our mountain photography expedition unforgettable. Top notch reliability, pristine vehicle condition, and seamless customer service.'
  },
  {
    name: 'Elena Rostova',
    role: 'Travel Blogger',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    quote: 'The booking process was lightning fast and transparent with zero hidden fees. Best camper rental experience we have ever had across Europe and America.'
  }
];

export default function TestimonialsSlider() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const maxPages = Math.ceil(testimonialsData.length / itemsPerPage);

  const startIdx = currentPage * itemsPerPage;
  const displayed = testimonialsData.slice(startIdx, startIdx + itemsPerPage);

  const handlePrev = () => {
    setCurrentPage(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage(prev => Math.min(maxPages - 1, prev + 1));
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Happy Customers Say</h2>
        </div>

        <div className="testimonials-slider-box">
          <div className="testimonials-top-nav">
            <div className="slider-dots">
              {Array.from({ length: maxPages }).map((_, idx) => (
                <div 
                  key={idx} 
                  className={`slider-dot ${idx === currentPage ? 'active' : ''}`}
                  onClick={() => setCurrentPage(idx)}
                />
              ))}
            </div>
            <button className="slider-btn" onClick={handlePrev} aria-label="Previous Testimonial">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button className="slider-btn" onClick={handleNext} aria-label="Next Testimonial">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>

          <div className="testimonials-grid">
            {displayed.map((item, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="testimonial-author-row">
                  <img className="testimonial-avatar" src={item.avatar} alt={item.name} />
                  <div>
                    <h4 className="testimonial-name">{item.name}</h4>
                    <span className="testimonial-role">{item.role}</span>
                  </div>
                </div>
                <p className="testimonial-quote">{item.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
