// Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/components/Header.scss';

function Header() {
    return (
        <div className="header">
            <div className="header__top">
                {/* Your logo here */}
                <NavLink to="/" className="header__logo">PETS 🐾 UNPEEVED</NavLink>
                {/* User icon - assuming you have a way to get the user's profile picture */}
                <NavLink to="/user-profile" className="header__profile">
                    <img src="../../assets/male-icons/male3.jpeg" alt="User" className="header__profile-icon" />
                </NavLink>
            </div>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li><NavLink to="/pet-management" className="header__nav-item">Pet Management</NavLink></li>
                    <li><NavLink to="/home" className="header__nav-item">Home Page</NavLink></li>
                    <li><NavLink to="/notifications" className="header__nav-item">Notifications</NavLink></li>
                    {/* Add more nav items as needed */}
                </ul>
            </nav>
        </div>
    );
}

export default Header;
