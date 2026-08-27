import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FaqAccordion from '../components/FaqAccordion';
import NewsletterCard from '../components/NewsletterCard';
import '../styles/pages.css';

export default function FaqPage() {
  return (
    <>
      <Navbar />

      <section className="page-header-banner">
        <div className="container">
          <h1 className="page-title">Frequently Asked Questions</h1>
          <div className="breadcrumb-nav">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">F.A.Q.</span>
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 0 80px', background: '#141517' }}>
        <div className="container">
          <FaqAccordion />
        </div>
      </section>

      <NewsletterCard />
      <Footer />
    </>
  );
}
