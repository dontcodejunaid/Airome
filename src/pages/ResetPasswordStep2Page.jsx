import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { storageService } from '../services/storageService';
import { useToast } from '../context/ToastContext';
import '../styles/auth.css';

export default function ResetPasswordStep2Page() {
  const [searchParams] = useSearchParams();
  const initialEmail = searchParams.get('email') || '';

  const [email, setEmail] = useState(initialEmail);
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !code || !newPassword) {
      showToast('Please fill in all fields.', 'error');
      return;
    }

    if (newPassword !== confirmPassword) {
      showToast('New passwords do not match.', 'error');
      return;
    }

    if (newPassword.length < 6) {
      showToast('Password must be at least 6 characters.', 'error');
      return;
    }

    setLoading(true);
    try {
      storageService.verifyAndResetPassword(email, code, newPassword);
      showToast('Password reset successfully! Please sign in with your new password.');
      navigate('/login');
    } catch (err) {
      showToast(err.message || 'Verification failed. Please check your code.', 'error');
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
          {/* Verification code if needed */}
          {email && (
            <input type="hidden" value={email} />
          )}

          <div className="auth-form-group">
            <label className="auth-form-label">New Password</label>
            <input
              type="password"
              className="auth-input"
              placeholder="••••••••••••"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <div className="auth-form-group">
            <label className="auth-form-label">Confirm Password</label>
            <input
              type="password"
              className="auth-input"
              placeholder="••••••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-auth-submit" disabled={loading} style={{ marginTop: '14px' }}>
            {loading ? 'Resetting Password...' : 'Reset Password'}
          </button>
        </form>

        <div className="auth-switch-prompt" style={{ marginTop: '20px' }}>
          Back to <Link to="/login">Sign In</Link>
        </div>
      </div>
    </div>
  );
}
