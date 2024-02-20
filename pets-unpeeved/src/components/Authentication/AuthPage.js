import React, { useState } from 'react';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';

function AuthPage() {
  const [isLoginView, setIsLoginView] = useState(true);

  return (
    <div>
      {isLoginView ? (
        <div>
          <Login />
          <p>
            Don't have an account?{' '}
            <button onClick={() => setIsLoginView(false)}>Register here</button>
          </p>
        </div>
      ) : (
        <div>
          <Registration />
          <p>
            Already have an account?{' '}
            <button onClick={() => setIsLoginView(true)}>Login here</button>
          </p>
        </div>
      )}
    </div>
  );
}

export default AuthPage;
