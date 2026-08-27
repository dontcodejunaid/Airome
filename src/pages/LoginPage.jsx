import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import '../styles/auth.css';

export default function LoginPage() {
  const [identifier, setIdentifier] = useState('demo@email.com');
  const [password, setPassword] = useState('password123');
  const [rememberMe, setRememberMe] = useState(false);
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaCode, setCaptchaCode] = useState('264155');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const generateCaptcha = () => {
    const chars = '0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(result);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!identifier || !password) {
      showToast('Please enter both username/email and password', 'error');
      return;
    }

    if (captchaInput && captchaInput !== captchaCode) {
      showToast('Invalid security code. Please try again.', 'error');
      generateCaptcha();
      setCaptchaInput('');
      return;
    }

    setLoading(true);
    try {
      const user = login(identifier, password);
      showToast(`Welcome back, ${user.fullName || user.username || 'Traveler'}!`);
      navigate('/');
    } catch (err) {
      showToast(err.message || 'Login failed. Please verify credentials.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-split-wrapper">
      <div className="auth-split-image login-bg"></div>

      <div className="auth-split-form-panel">
        <div className="auth-form-card">
          <div className="auth-brand-header">
            <Link to="/" className="brand-logo-link">
              <img src="/brand-logo.png" alt="Airoame" className="site-brand-logo-img auth-logo-img" />
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="auth-form-group">
              <label className="auth-form-label">Username or E-mail</label>
              <input
                type="text"
                className="auth-input"
                placeholder="demo@email.com"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
              />
            </div>

            <div className="auth-form-group">
              <label className="auth-form-label">Password</label>
              <input
                type="password"
                className="auth-input"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="auth-options-row">
              <label className="auth-remember-label">
                <input 
                  type="checkbox" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember me</span>
              </label>
              <Link to="/reset-password" className="auth-forgot-link">Forgot password?</Link>
            </div>

            {/* Glowing Security Captcha Badge */}
            <div className="auth-captcha-box" onClick={generateCaptcha} title="Click to refresh code">
              <span className="captcha-digits">{captchaCode}</span>
            </div>

            <div className="auth-form-group">
              <input 
                type="text" 
                className="auth-input auth-captcha-input" 
                placeholder="Enter Code"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-auth-submit" disabled={loading}>
              {loading ? 'Logging In...' : 'Login'}
            </button>
          </form>

          <div className="auth-switch-prompt">
            New here? <Link to="/register">Create an account</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
