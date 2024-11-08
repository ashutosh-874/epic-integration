// Callback.js
import React, { useEffect } from 'react';
import axios from 'axios';
import { EPIC_CLIENT_ID, EPIC_TOKEN_URL, EPIC_REDIRECT_URI } from './config';

function Callback() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const authCode = urlParams.get('code');

    if (authCode) {
      getAccessToken(authCode);
    }
  }, []);

  const getAccessToken = async (code) => {
    try {
      const response = await axios.post(
        EPIC_TOKEN_URL,
        new URLSearchParams({
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: EPIC_REDIRECT_URI,
          client_id: EPIC_CLIENT_ID,
        }).toString(),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      console.log(response);

      const accessToken = response.data.access_token;
      localStorage.setItem('epic_access_token', accessToken); // Store token securely (consider using a secure store in production)
    
    //   window.location.href = "/"; // Redirect to the main app
    } catch (error) {
      console.error('Failed to get access token', error);
    }
  };

  return <div>Loading...</div>;
}

export default Callback;
