import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FeaturesBanner from '../components/FeaturesBanner';
import NewsletterCard from '../components/NewsletterCard';
import TestimonialsSlider from '../components/TestimonialsSlider';
import '../styles/pages.css';

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <section className="page-header-banner">
        <div className="container">
          <h1 className="page-title">About Us</h1>
          <div className="breadcrumb-nav">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">About Us</span>
          </div>
        </div>
      </section>

      <section className="about-company-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=1000&q=80" 
                alt="Luxury Camper Experience" 
                className="about-primary-img" 
              />
              <div className="about-experience-badge">
                <span className="badge-number">12+</span>
                <span className="badge-text">Years of Premium Journey Solutions</span>
              </div>
            </div>

            <div className="about-text-content">
              <span className="section-tag">WHO WE ARE</span>
              <h2 className="section-heading">Redefining The Art Of Travel Across North America</h2>
              <p className="about-lead">
                Airoame was founded with a singular mission: to make freedom of travel synonymous with uncompromising luxury, peace of mind, and bespoke adventure.
              </p>
              <p className="about-desc">
                Whether you're traversing mountain passes in an all-terrain camper van or cruising coastal highways in an executive SUV, our meticulously maintained fleet guarantees that your voyage is just as memorable as the destination.
              </p>

              <div className="about-stats-row">
                <div className="stat-box">
                  <h3>150+</h3>
                  <p>Luxury Vehicles</p>
                </div>
                <div className="stat-box">
                  <h3>24/7</h3>
                  <p>Roadside Concierge</p>
                </div>
                <div className="stat-box">
                  <h3>99.4%</h3>
                  <p>Customer Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Features */}
      <FeaturesBanner />

      {/* Testimonials */}
      <TestimonialsSlider />

      <NewsletterCard />
      <Footer />
    </>
  );
}
