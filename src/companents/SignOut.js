
import React from 'react'
import { auth } from '../fierbase.js'
import { Button } from '@mui/material';
const SignOut = () => {
  return (
    <div>
      <Button onClick={() => auth.signOut()}>Sign Out</Button>
    </div>
  )
}

export default SignOut
