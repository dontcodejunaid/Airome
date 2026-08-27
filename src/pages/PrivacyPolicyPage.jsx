import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsletterCard from '../components/NewsletterCard';
import '../styles/pages.css';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <section className="page-header-banner">
        <div className="container">
          <h1 className="page-title">Privacy Policy</h1>
          <div className="breadcrumb-nav">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Privacy Policy</span>
          </div>
        </div>
      </section>

      <section className="legal-content-section">
        <div className="container legal-container">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Airoame ("we", "our", or "us"). We are dedicated to safeguarding your personal data and respecting your privacy when using our luxury rental platform and booking concierge services.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            When you create an account, request a booking, or interact with our fleet services, we may collect:
          </p>
          <ul>
            <li>Contact details (name, email address, phone number).</li>
            <li>Driver's license data and identity verification information for vehicle release.</li>
            <li>Booking preferences, travel dates, and optional add-on choices.</li>
            <li>Billing and transaction history.</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>
            Your information allows us to provide seamless rental reservations, verify driver safety qualifications, send critical trip updates, and provide 24/7 roadside assistance during your journey.
          </p>

          <h2>4. Data Protection & Security</h2>
          <p>
            We deploy multi-tiered encryption and standard security controls to safeguard against unauthorized access or disclosure of your personal information.
          </p>

          <h2>5. Contact Data Officer</h2>
          <p>
            If you have questions regarding your data rights or wish to request data deletion, please contact privacy@airoame.com.
          </p>
        </div>
      </section>

      <NewsletterCard />
      <Footer />
    </>
  );
}
