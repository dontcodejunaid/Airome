import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsletterCard from '../components/NewsletterCard';
import '../styles/pages.css';

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <section className="page-header-banner">
        <div className="container">
          <h1 className="page-title">Terms & Conditions</h1>
          <div className="breadcrumb-nav">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Terms and Conditions</span>
          </div>
        </div>
      </section>

      <section className="legal-content-section">
        <div className="container legal-container">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing Airoame and booking any vehicle or associated experience, you agree to be bound by these Terms and Conditions and all applicable vehicle rental agreements.
          </p>

          <h2>2. Driver Eligibility</h2>
          <p>
            Drivers must be at least 21 years of age (25 for select high-performance vehicles) and possess a valid, unexpired driver’s license. International drivers must present a valid passport and international driving permit where required.
          </p>

          <h2>3. Reservation, Deposit & Payment</h2>
          <p>
            A valid payment method and security deposit authorization are required at the time of reservation confirmation. Security deposits are promptly released upon undamaged inspection of the vehicle at return.
          </p>

          <h2>4. Cancellation Policy</h2>
          <p>
            Cancellations made 72 hours or more prior to the scheduled pickup receive a 100% full refund. Cancellations within 24–72 hours may incur a standard 1-day reservation fee.
          </p>

          <h2>5. Prohibited Uses</h2>
          <p>
            Vehicles may not be used for unauthorized commercial rideshare, street racing, towing beyond rated vehicle capacities, or operation in unpaved prohibited trail areas without prior off-grid tier authorization.
          </p>
        </div>
      </section>

      <NewsletterCard />
      <Footer />
    </>
  );
}
