import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsletterCard from '../components/NewsletterCard';
import { storageService } from '../services/storageService';
import '../styles/pages.css';

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const data = storageService.getBlogs();
    setBlogs(data);
  }, []);

  const categories = ['All', 'Travel Guide', 'Road Trip', 'Van Life', 'Tips & Tricks'];

  const filteredBlogs = selectedCategory === 'All' 
    ? blogs 
    : blogs.filter(b => b.category === selectedCategory || b.tag === selectedCategory);

  return (
    <>
      <Navbar />

      <section className="page-header-banner">
        <div className="container">
          <h1 className="page-title">Blog & Stories</h1>
          <div className="breadcrumb-nav">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Blog</span>
          </div>
        </div>
      </section>

      <section className="blog-section">
        <div className="container">
          {/* Category Filter Pills */}
          <div className="blog-category-filter">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="blog-grid">
            {filteredBlogs.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-card-img-box">
                  <img src={post.image} alt={post.title} className="blog-card-img" />
                  <span className="blog-tag">{post.category || 'Adventure'}</span>
                </div>
                <div className="blog-card-body">
                  <div className="blog-meta">
                    <span>{post.date || 'October 14, 2024'}</span>
                    <span>•</span>
                    <span>{post.readTime || '5 min read'}</span>
                  </div>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt || post.description}</p>
                  <a href="#read" className="blog-read-more">
                    Read Story
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <NewsletterCard />
      <Footer />
    </>
  );
}
