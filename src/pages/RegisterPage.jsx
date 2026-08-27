import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import '../styles/auth.css';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    phoneCode: '+91',
    mobileNumber: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.email || !formData.password) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      showToast('Passwords do not match.', 'error');
      return;
    }

    if (formData.password.length < 6) {
      showToast('Password must be at least 6 characters.', 'error');
      return;
    }

    setLoading(true);
    try {
      register({
        fullName: `${formData.firstName} ${formData.lastName}`.trim(),
        firstName: formData.firstName,
        lastName: formData.lastName,
        username: formData.username || formData.email.split('@')[0],
        email: formData.email,
        phone: `${formData.phoneCode} ${formData.mobileNumber}`.trim(),
        country: formData.country,
        password: formData.password
      });
      showToast('Account registered successfully! Welcome aboard.');
      navigate('/');
    } catch (err) {
      showToast(err.message || 'Registration failed.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-split-wrapper">
      <div className="auth-split-image register-bg"></div>

      <div className="auth-split-form-panel">
        <div className="auth-form-card auth-register-card">
          <div className="auth-brand-header">
            <Link to="/" className="brand-logo-link">
              <img src="/brand-logo.png" alt="Airoame" className="site-brand-logo-img auth-logo-img" />
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            {/* First Name & Last Name */}
            <div className="auth-form-row">
              <div className="auth-form-group">
                <label className="auth-form-label">First Name</label>
                <input
                  type="text"
                  className="auth-input"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  required
                />
              </div>
              <div className="auth-form-group">
                <label className="auth-form-label">Last Name</label>
                <input
                  type="text"
                  className="auth-input"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Country & Mobile Number */}
            <div className="auth-form-row">
              <div className="auth-form-group">
                <label className="auth-form-label">Country</label>
                <select
                  className="auth-select"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                >
                  <option value="">Country</option>
                  <option value="United States">United States</option>
                  <option value="India">India</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                </select>
              </div>
              <div className="auth-form-group">
                <label className="auth-form-label">Mobile Number</label>
                <div className="auth-phone-group">
                  <span className="auth-phone-prefix">+91</span>
                  <input
                    type="tel"
                    className="auth-input"
                    placeholder="9994585226"
                    value={formData.mobileNumber}
                    onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* Username & E-Mail Address */}
            <div className="auth-form-row">
              <div className="auth-form-group">
                <label className="auth-form-label">Username</label>
                <input
                  type="text"
                  className="auth-input"
                  placeholder="Username"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
              </div>
              <div className="auth-form-group">
                <label className="auth-form-label">E-Mail Address</label>
                <input
                  type="email"
                  className="auth-input"
                  placeholder="E-mail Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Password & Confirm Password */}
            <div className="auth-form-row">
              <div className="auth-form-group">
                <label className="auth-form-label">Password</label>
                <input
                  type="password"
                  className="auth-input"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
              </div>
              <div className="auth-form-group">
                <label className="auth-form-label">Confirm Password</label>
                <input
                  type="password"
                  className="auth-input"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-auth-submit" disabled={loading} style={{ marginTop: '16px' }}>
              {loading ? 'Registering...' : 'Register'}
            </button>
          </form>

          <div className="auth-switch-prompt">
            Already have an Account? <Link to="/login">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
