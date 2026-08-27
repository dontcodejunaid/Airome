import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const faqItemsData = [
  {
    q: 'What documents do I need to rent a luxury vehicle or camper van?',
    a: 'You will need a valid government-issued driver’s license (held for at least 1 year), a major credit card for the security deposit authorization, and a valid passport or national ID for identity verification.'
  },
  {
    q: 'Is insurance coverage included in the rental price?',
    a: 'Yes, all our rentals include standard collision damage waiver (CDW) and third-party liability coverage. Premium comprehensive protection with zero deductible is available on select tiers.'
  },
  {
    q: 'Can I take the camper van on off-road trails and across state borders?',
    a: 'Our 4x4 expedition models and camper vans are fully certified for all designated national park roads, scenic byways, and cross-state travel throughout North America with unlimited mileage packages.'
  },
  {
    q: 'What is your cancellation and refund policy?',
    a: 'Reservations cancelled at least 72 hours prior to scheduled departure receive a 100% full refund with no penalties. Cancellations within 24 to 72 hours receive a full credit towards any future booking.'
  },
  {
    q: 'Do you offer 24/7 roadside assistance during my trip?',
    a: 'Yes! Every rental comes with 24/7 dedicated concierge dispatch, emergency roadside care, battery jumpstarts, flat tire replacement, and guaranteed vehicle swap support nationwide.'
  }
];

export default function FaqAccordion() {
  const [activeIdx, setActiveIdx] = useState(2); // 3rd item active by default as in screenshot

  const toggle = (idx) => {
    setActiveIdx(prev => (prev === idx ? -1 : idx));
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>

        <div className="faq-list">
          {faqItemsData.map((item, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div key={idx} className={`faq-item ${isActive ? 'active' : ''}`}>
                <button className="faq-question-btn" onClick={() => toggle(idx)}>
                  <span>{item.q}</span>
                  <span className="faq-icon-toggle">{isActive ? '—' : '+'}</span>
                </button>
                <div className="faq-answer-panel">
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="faq-view-more">
          <Link to="/faq">View more</Link>
        </div>
      </div>
    </section>
  );
}
