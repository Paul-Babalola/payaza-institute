import React, { useState } from "react";
import "../styles/Auth.css";

const Auth: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-left">
          <img
            src={require("../assets/logo.png")}
            alt="Payaza Institute Logo"
            className="auth-logo"
          />
          <h2 className="auth-welcome">
            {isSignIn ? "Welcome Back!" : "Join Payaza Institute"}
          </h2>
          <p className="auth-description">
            {isSignIn
              ? "Access your learning journey and continue where you left off."
              : "Start your learning journey with us and become industry ready."}
          </p>
        </div>

        <div className="auth-right">
          <div className="auth-form-container">
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
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="auth-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="auth-input"
                    required
                  />
                </div>
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
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="auth-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="auth-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Choose a password"
                    className="auth-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    className="auth-input"
                    required
                  />
                </div>
                <button type="submit" className="auth-submit">
                  Sign Up
                </button>
                <p className="auth-footer">
                  Already have an account?{" "}
                  <button
                    className="auth-switch"
                    onClick={() => setIsSignIn(true)}
                  >
                    Sign In
                  </button>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
