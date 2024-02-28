// Registration.js
import React, {useState} from 'react';
import '../../styles/components/Registration.scss';
import {useNavigate} from "react-router-dom";
import {API_URL} from "../../values";

const Registration = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  let navigate = useNavigate()

  function onSubmit(e){
    e.preventDefault();

    if(!(data.name.length && data.email.length && data.password.length)){
      return alert('Provide your name, email and password')
    }

    if(data.password !== data.confirmPassword){
      return alert('Passwords must match!')
    }

    fetch(`${API_URL}/auth/signup`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
        .then(response => {
          if(response.ok){
            return response.json();
          }

          response.json().then(resp => {
            alert(resp.message)
          });
        })
        .then(response => {
          if(response.token) {
            // Save token for future use
            window.localStorage.setItem("token", response.token)
            navigate('/home')
          }
        })
        .catch(error => {
          console.log(error)
        })
  }

  return (
    <div className="registration-modal">
      <h2 className="registration-modal__title">Register</h2>
      <form className="registration-modal__form" onSubmit={onSubmit}>
        <div className="registration-modal__form-group">
          <input type="name" value={data.name} onChange={(e) => setData({...data, name: e.target.value})}
                 placeholder="Name" className="registration-modal__input" required/>
        </div>
        <div className="registration-modal__form-group">
          <input type="email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})}
                 placeholder="Email" className="registration-modal__input" required/>
        </div>
        <div className="registration-modal__form-group">
          <input type="password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})}
                 placeholder="Password" className="registration-modal__input" required/>
        </div>
        <div className="registration-modal__form-group">
          <input type="password" value={data.confirmPassword}
                 onChange={(e) => setData({...data, confirmPassword: e.target.value})} placeholder="Confirm Password"
                 className="registration-modal__input" required/>
        </div>
        <button type="submit" className="registration-modal__submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Registration;
