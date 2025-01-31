import React from 'react';

import { Button } from '@mui/material'; 
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../fierbase'; 

function Signin() {
  function SignInWithGoogle() {
    const provider = new GoogleAuthProvider();
    const authentication = getAuth();

    signInWithPopup(authentication, provider)
      .then((result) => {
        console.log('User signed in:', result.user);
      })
      .catch((error) => {
        console.error('Error signing in:', error);
      });
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={SignInWithGoogle}>
        Sign In with Google
      </Button>
    </div>
  );
}

export default Signin;
