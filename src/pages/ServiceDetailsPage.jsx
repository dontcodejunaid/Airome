import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FeaturesBanner from '../components/FeaturesBanner';
import NewsletterCard from '../components/NewsletterCard';
import '../styles/pages.css';

export default function ServiceDetailsPage() {
  return (
    <>
      <Navbar />

      <section className="page-header-banner">
        <div className="container">
          <h1 className="page-title">Service Details</h1>
          <div className="breadcrumb-nav">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Service Details</span>
          </div>
        </div>
      </section>

      <section className="service-details-section">
        <div className="container">
          <div className="service-layout">
            
            <div className="service-main-content">
              <div className="service-hero-img-box">
                <img 
                  src="https://images.unsplash.com/photo-1513311068348-19c8fbdc0bb6?auto=format&fit=crop&w=1200&q=80" 
                  alt="Luxury Van & SUV Rental" 
                  className="service-hero-img" 
                />
              </div>

              <h2 className="service-heading">Luxury Van & SUV Fleet Rental Experience</h2>
              <p className="service-p">
                At Airoame, we believe that the vehicle is more than just transportation—it is the hearth of your road trip. Our custom camper vans and luxury SUVs are outfitted with bespoke Italian finishes, whisper-quiet climate control, state-of-the-art entertainment, and off-grid power systems.
              </p>

              <h3 className="service-subheading">What is Included In Every Rental:</h3>
              <ul className="service-feature-list">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#d6088e" strokeWidth="2.5" width="20" height="20">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span><strong>Unlimited Mileage Packages</strong> – Explore without borders or unexpected distance charges.</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#d6088e" strokeWidth="2.5" width="20" height="20">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span><strong>Comprehensive Premium Insurance</strong> – Comprehensive collision & theft coverage included in top tiers.</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#d6088e" strokeWidth="2.5" width="20" height="20">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span><strong>24/7 Dedicated Concierge & Roadside Care</strong> – Instant dispatch support wherever you are.</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#d6088e" strokeWidth="2.5" width="20" height="20">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span><strong>Sanitized & Tech-Equipped</strong> – Starlink ready, solar-backed, and multi-point safety inspected.</span>
                </li>
              </ul>
            </div>

            {/* Sidebar with Quick Book */}
            <aside className="service-sidebar">
              <div className="service-cta-card">
                <h3>Ready for your Next Adventure?</h3>
                <p>Reserve your custom luxury vehicle in minutes with zero hidden fees.</p>
                <Link to="/vehicles" className="btn btn-primary btn-block">Explore Vehicles</Link>
                <Link to="/contact" className="btn btn-outline btn-block" style={{ marginTop: '12px' }}>Speak to Concierge</Link>
              </div>
            </aside>

          </div>
        </div>
      </section>

      <FeaturesBanner />
      <NewsletterCard />
      <Footer />
    </>
  );
}
