import React, { useState, useEffect, useRef } from 'react';
import App from '../App'
import SignOut from './SignOut';
import { db, auth } from '../fierbase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import SendMessage from './SendMessage';


const Chat = () => {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const messagesCollection = collection(db, 'messages');
    const q = query(messagesCollection, orderBy('createdAt'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      scrollToBottom();
    });

    return () => unsubscribe();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="chat-container">
      <SignOut />
      <div className="messages">
        {messages.map(({ id, text, photoUrl, uid }) => (
          <div
            key={id}
            className={`message ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}
          >
            
            <p className="message-text">{text}</p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <SendMessage />
    </div>
  );
};

export default Chat;

