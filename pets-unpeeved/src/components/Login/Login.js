// Login.js
import React, {useState} from 'react';
import '../../styles/components/Login.scss';
import {API_URL} from "../../values";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    let navigate = useNavigate()

    function onSubmit(e){
        e.preventDefault();

        fetch(`${API_URL}/auth/login`, {
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
    <div className="login-modal">
      <h2 className="login-modal__title">Login</h2>
      <form className="login-modal__form" onSubmit={onSubmit}>
        <div className="login-modal__form-group">
          <input type="email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} placeholder="Email" className="login-modal__input" />
        </div>
        <div className="login-modal__form-group">
          <input type="password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})} placeholder="Password" className="login-modal__input" />
        </div>
        <button type="submit" className="login-modal__submit">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
