// Login.js
import React from 'react';
import { EPIC_CLIENT_ID, EPIC_AUTH_URL, EPIC_REDIRECT_URI } from './config';

function Login() {
  const handleLogin = () => {
    const authUrl = `${EPIC_AUTH_URL}?response_type=code&client_id=${EPIC_CLIENT_ID}&redirect_uri=${encodeURIComponent(
      EPIC_REDIRECT_URI
    )}&scope=openid%20fhirUser%20patient/*.*`;
    
    window.location.href = authUrl; // Redirect to Epic's authorization URL
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Epic</button>
    </div>
  );
}

export default Login;
