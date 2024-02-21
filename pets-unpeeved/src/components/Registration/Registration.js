// Registration.js
import React from 'react';
import '../../styles/components/Registration.scss';

const Registration = () => {
  return (
    <div className="registration-modal">
      <h2 className="registration-modal__title">Register</h2>
      <form className="registration-modal__form">
        <div className="registration-modal__form-group">
          <input type="email" placeholder="Email" className="registration-modal__input" />
        </div>
        <div className="registration-modal__form-group">
          <input type="password" placeholder="Password" className="registration-modal__input" />
        </div>
        <div className="registration-modal__form-group">
          <input type="password" placeholder="Confirm Password" className="registration-modal__input" />
        </div>
        <button type="submit" className="registration-modal__submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Registration;
