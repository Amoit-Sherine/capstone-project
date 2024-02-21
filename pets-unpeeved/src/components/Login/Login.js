// Login.js
import React from 'react';
import '../../styles/components/Login.scss';

const Login = () => {
  return (
    <div className="login-modal">
      <h2 className="login-modal__title">Login</h2>
      <form className="login-modal__form">
        <div className="login-modal__form-group">
          <input type="email" placeholder="Email" className="login-modal__input" />
        </div>
        <div className="login-modal__form-group">
          <input type="password" placeholder="Password" className="login-modal__input" />
        </div>
        <button type="submit" className="login-modal__submit">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
