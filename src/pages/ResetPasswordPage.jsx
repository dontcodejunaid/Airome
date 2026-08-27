import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { storageService } from '../services/storageService';
import { useToast } from '../context/ToastContext';
import '../styles/auth.css';

export default function ResetPasswordPage() {
  const [method, setMethod] = useState('email');
  const [email, setEmail] = useState('demo@email.com');
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      showToast('Please enter your email address.', 'error');
      return;
    }

    setLoading(true);
    try {
      const code = storageService.generateResetCode(email);
      showToast(`Verification code sent! (Mock code: ${code})`);
      navigate(`/reset-password-step2?email=${encodeURIComponent(email)}`);
    } catch (err) {
      showToast(err.message || 'Error sending reset code.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reset-fullscreen-wrapper">
      <div className="reset-glass-card">
        <Link to="/" className="brand-logo-link" style={{ marginBottom: '20px' }}>
          <img src="/brand-logo.png" alt="Airoame" className="site-brand-logo-img auth-logo-img" />
        </Link>
        <h2 className="reset-card-title">Reset Password</h2>

        <form onSubmit={handleSubmit} className="reset-form">
          <div className="auth-form-group">
            <label className="auth-form-label">Select One</label>
            <select 
              className="auth-select"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            >
              <option value="email">E-Mail Address</option>
              <option value="phone">Phone Number</option>
            </select>
          </div>

          <div className="auth-form-group">
            <label className="auth-form-label">
              {method === 'email' ? 'E-Mail Address' : 'Phone Number'}
            </label>
            <input
              type={method === 'email' ? 'email' : 'tel'}
              className="auth-input"
              placeholder={method === 'email' ? 'demo@email.com' : '+1 (555) 000-0000'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-auth-submit" disabled={loading} style={{ marginTop: '10px' }}>
            {loading ? 'Sending Code...' : 'Send Password Code'}
          </button>
        </form>

        <div className="auth-switch-prompt" style={{ marginTop: '20px' }}>
          Remember password? <Link to="/login">Sign In</Link>
        </div>
      </div>
    </div>
  );
}
