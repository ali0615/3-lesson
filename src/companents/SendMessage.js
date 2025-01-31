import { Input, Button } from '@mui/material';
import { useState } from 'react';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { auth } from '../fierbase'; // Предполагается, что auth настроен правильно
import React from 'react';
import App from '../App'

const SendMessage = () => {
  const [msg, setMsg] = useState('');
  const db = getFirestore();

  async function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    try {
      await addDoc(collection(db, 'messages'), {
        text: msg,
        photoURL,
        uid,
        createdAt: serverTimestamp()
      });
      setMsg('');
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <Input className='imput'
          value={msg} 
          onChange={(e) => setMsg(e.target.value)} 
          placeholder="Message..."
        />
        <Button type='submit'>Send</Button>
      </form>
    </div>
  );
};

export default SendMessage;