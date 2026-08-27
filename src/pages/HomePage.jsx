import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsletterCard from '../components/NewsletterCard';
import SearchWidget from '../components/SearchWidget';
import FleetShowcase from '../components/FleetShowcase';
import FeaturesBanner from '../components/FeaturesBanner';
import PricingPlans from '../components/PricingPlans';
import FaqAccordion from '../components/FaqAccordion';
import TestimonialsSlider from '../components/TestimonialsSlider';
import BookingModal from '../components/BookingModal';
import '../styles/home.css';

export default function HomePage() {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const elem = document.getElementById(targetId);
      if (elem) {
        setTimeout(() => {
          const yOffset = -90; // account for sticky header
          const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 80);
      }
    }
  }, [location.hash]);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Luxury Camper & SUV Rentals<br />Starting from $199/day</h1>
            <p className="hero-desc">
              Experience the freedom of the open road with our handpicked fleet of premium adventure camper vans and executive SUVs. Seamless booking, zero hidden fees, and 24/7 dedicated concierge assistance.
            </p>
            <div className="hero-actions">
              <Link to="/about" className="btn btn-outline">Learn More</Link>
              <Link to="/vehicles" className="btn btn-primary">Book Ride</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Car Search Widget Section */}
      <section className="search-section-standalone" id="search">
        <div className="container">
          <SearchWidget />
        </div>
      </section>

      {/* Our Rental Fleet Showcase */}
      <div id="fleet">
        <FleetShowcase onBookNow={(vehicle) => setSelectedVehicle(vehicle)} />
      </div>

      {/* 3-Column Highlights */}
      <FeaturesBanner />

      {/* Pricing Plan */}
      <div id="pricing">
        <PricingPlans onSelectPlan={(plan) => setSelectedVehicle({
          id: 'plan_' + plan.name,
          name: `${plan.name} Package`,
          price: plan.price,
          type: 'Rental Package',
          transmission: 'Included',
          fuel: 'Included',
          angles: ['/fleet/vw-california.jpg']
        })} />
      </div>

      {/* FAQ */}
      <div id="faq">
        <FaqAccordion />
      </div>

      {/* Happy Customers Say */}
      <TestimonialsSlider />

      {/* Newsletter */}
      <NewsletterCard />

      {/* Footer */}
      <Footer />

      {/* Booking Modal */}
      {selectedVehicle && (
        <BookingModal 
          vehicle={selectedVehicle} 
          onClose={() => setSelectedVehicle(null)} 
        />
      )}
    </>
  );
}
