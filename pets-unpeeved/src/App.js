import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from "./components/Authentication/AuthPage";
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import AddPet from "./components/AddPet/AddPet";
import PetManagement from "./components/PetManagement/PetManagement";
import MainLayout from "./components/MainLayout";
import './styles/global.scss';
import HomePage from "./components/HomePage/HomePage";
import Notifications from "./components/Notifications/Notifications";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<AuthPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Registration />} />
                {/* Wrap routes that need the Header within the MainLayout */}
                <Route element={<MainLayout />}>
                    <Route path="/user-profile" element={<UserProfile />} />
                    <Route path="/pet-management" element={<PetManagement />} />
                    <Route path="/addpet" element={<AddPet />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/notifications" element={<Notifications />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
