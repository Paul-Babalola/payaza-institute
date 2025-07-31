import React, { useState } from "react";
import "../styles/Auth.css";

interface AuthProps {
  isOpen: boolean;
  onClose: () => void;
}

const Auth: React.FC<AuthProps> = ({ isOpen, onClose }) => {
  const [isSignIn, setIsSignIn] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="auth-overlay">
      <div className="auth-modal">
        <button className="close-button" onClick={onClose}>
          ×
        </button>

        <div className="auth-header">
          <button
            className={`auth-tab ${isSignIn ? "active" : ""}`}
            onClick={() => setIsSignIn(true)}
          >
            Sign In
          </button>
          <button
            className={`auth-tab ${!isSignIn ? "active" : ""}`}
            onClick={() => setIsSignIn(false)}
          >
            Sign Up
          </button>
        </div>

        {isSignIn ? (
          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email"
              className="auth-input"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="auth-input"
              required
            />
            <button type="submit" className="auth-submit">
              Sign In
            </button>
            <p className="auth-footer">
              Don't have an account?{" "}
              <button
                className="auth-switch"
                onClick={() => setIsSignIn(false)}
              >
                Sign Up
              </button>
            </p>
          </form>
        ) : (
          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Full Name"
              className="auth-input"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="auth-input"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="auth-input"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="auth-input"
              required
            />
            <button type="submit" className="auth-submit">
              Sign Up
            </button>
            <p className="auth-footer">
              Already have an account?{" "}
              <button className="auth-switch" onClick={() => setIsSignIn(true)}>
                Sign In
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Auth;
