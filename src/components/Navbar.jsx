import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

export default function Navbar({ isInternal = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navLinksRef = useRef({});
  const { currentUser, logout } = useAuth();
  const { showToast } = useToast();
  const location = useLocation();
  const navigate = useNavigate();

  // Determine active tab based on route or hash
  useEffect(() => {
    const pathname = location.pathname;
    const hash = location.hash;

    if (pathname === '/') {
      if (hash === '#pricing' || hash === '#plan') {
        setActiveTab('plan');
      } else if (hash === '#fleet') {
        setActiveTab('fleet');
      } else {
        setActiveTab('home');
      }
    } else if (pathname.startsWith('/vehicles')) {
      setActiveTab('vehicles');
    } else if (pathname.startsWith('/blog')) {
      setActiveTab('blog');
    } else if (pathname.startsWith('/contact')) {
      setActiveTab('contact');
    } else if (
      pathname.startsWith('/about') || 
      pathname.startsWith('/privacy-policy') || 
      pathname.startsWith('/terms') || 
      pathname.startsWith('/service') || 
      pathname.startsWith('/faq')
    ) {
      setActiveTab(''); // Remove underline completely on About Us pages
    } else {
      setActiveTab('');
    }
  }, [location.pathname, location.hash]);

  // Scroll spy on homepage only
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (location.pathname === '/') {
        const pricingElem = document.getElementById('pricing');
        const scrollPos = window.scrollY + 180;

        if (pricingElem && scrollPos >= pricingElem.offsetTop) {
          setActiveTab('plan');
        } else {
          setActiveTab('home');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Update animated underline position
  useEffect(() => {
    const updatePosition = () => {
      const targetElement = navLinksRef.current[activeTab];
      if (targetElement) {
        setUnderlineStyle({
          left: targetElement.offsetLeft,
          width: targetElement.offsetWidth,
          opacity: 1
        });
      } else {
        setUnderlineStyle(prev => ({ ...prev, opacity: 0 }));
      }
    };

    // Run immediately and in animation frame to ensure accurate layout metrics
    updatePosition();
    const rafId = requestAnimationFrame(updatePosition);
    window.addEventListener('resize', updatePosition);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', updatePosition);
    };
  }, [activeTab, location.pathname]);

  const handleNavClick = (tabKey, path, hash = '') => {
    setMobileOpen(false);
    setDropdownOpen(false);
    setActiveTab(tabKey);

    if (hash) {
      if (location.pathname === '/') {
        const el = document.getElementById(hash);
        if (el) {
          const yOffset = -90;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      } else {
        navigate(`/#${hash}`);
      }
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLogout = () => {
    logout();
    showToast('Logged out successfully.', 'success');
    navigate('/');
  };

  return (
    <header className={`site-header ${isInternal ? 'internal-page-header' : ''} ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="brand-logo-link" onClick={() => handleNavClick('home', '/')}>
          <img src="/brand-logo.png" alt="Airoame" className="site-brand-logo-img" />
        </Link>

        <nav className={`nav-menu ${mobileOpen ? 'active' : ''}`}>
          <div 
            className="nav-sliding-indicator"
            style={{
              transform: `translateX(${underlineStyle.left}px)`,
              width: `${underlineStyle.width}px`,
              opacity: underlineStyle.opacity
            }}
          />

          <button
            type="button"
            ref={el => navLinksRef.current['home'] = el}
            className={`nav-link-btn ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('home', '/')}
          >
            Home
          </button>

          <button
            type="button"
            ref={el => navLinksRef.current['vehicles'] = el}
            className={`nav-link-btn ${activeTab === 'vehicles' ? 'active' : ''}`}
            onClick={() => handleNavClick('vehicles', '/vehicles')}
          >
            Vehicles
          </button>

          <button
            type="button"
            ref={el => navLinksRef.current['blog'] = el}
            className={`nav-link-btn ${activeTab === 'blog' ? 'active' : ''}`}
            onClick={() => handleNavClick('blog', '/blog')}
          >
            Blog
          </button>

          <button
            type="button"
            ref={el => navLinksRef.current['plan'] = el}
            className={`nav-link-btn ${activeTab === 'plan' ? 'active' : ''}`}
            onClick={() => handleNavClick('plan', '/', 'pricing')}
          >
            Plan
          </button>

          <button
            type="button"
            ref={el => navLinksRef.current['contact'] = el}
            className={`nav-link-btn ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => handleNavClick('contact', '/contact')}
          >
            Contact
          </button>

          <div 
            className={`nav-dropdown ${dropdownOpen ? 'open' : ''}`}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              ref={el => navLinksRef.current['about'] = el}
              className={`nav-link-btn dropdown-toggle ${activeTab === 'about' ? 'active' : ''}`}
              onClick={() => handleNavClick('about', '/about')}
            >
              About Us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            <div className="dropdown-menu">
              <Link to="/about" className="dropdown-item" onClick={() => handleNavClick('about', '/about')}>About Us</Link>
              <Link to="/privacy-policy" className="dropdown-item" onClick={() => handleNavClick('about', '/privacy-policy')}>Privacy Policy</Link>
              <Link to="/terms-and-condition" className="dropdown-item" onClick={() => handleNavClick('about', '/terms-and-condition')}>Terms and Condition</Link>
              <Link to="/service-details" className="dropdown-item" onClick={() => handleNavClick('about', '/service-details')}>Service Details</Link>
              <Link to="/faq" className="dropdown-item" onClick={() => handleNavClick('about', '/faq')}>F.A.Q.</Link>
            </div>
          </div>
        </nav>

        <div className="nav-actions">
          {currentUser ? (
            <div className="user-badge">
              <span className="user-avatar-circle">{currentUser.firstName ? currentUser.firstName[0].toUpperCase() : 'U'}</span>
              <span>{currentUser.firstName || currentUser.username}</span>
              <button onClick={handleLogout} className="btn-logout">Logout</button>
            </div>
          ) : (
            <>
              <Link to="/login" className="btn btn-nav-login">Login</Link>
              <Link to="/register" className="btn btn-nav-register">Register</Link>
            </>
          )}

          <button 
            className="mobile-toggle" 
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
