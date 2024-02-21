import React, { useState } from 'react';
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import '../../styles/components/AuthPage.scss';

function AuthPage() {
    const [isLoginView, setIsLoginView] = useState(true);

    return (
        <div className="auth-page">
            {isLoginView ? (
                <div className="auth-page__content">
                    <Login />
                    <p className="auth-page__toggle">
                        Don't have an account? <button className="auth-page__submit" onClick={() => setIsLoginView(false)}>Register here</button>
                    </p>
                </div>
            ) : (
                <div className="auth-page__content">
                    <Registration />
                    <p className="auth-page__toggle">
                        Already have an account? <button className="auth-page__submit" onClick={() => setIsLoginView(true)}>Login here</button>
                    </p>
                </div>
            )}
        </div>
    );
}

export default AuthPage;
