// In src/components/Layouts/MainLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "./Header/Header";

const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet /> {/* Nested routes will render here */}
        </>
    );
};

export default MainLayout;
