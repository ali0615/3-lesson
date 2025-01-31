import './App.css';
import Signin from './companents/Signin'
import Chat from './companents/Chat';
import {auth} from './fierbase.js'
import {useAuthState} from 'react-firebase-hooks/auth'

function App() {
  const [user] = useAuthState(auth)
  return (
<>
{user ? <Chat/> : <Signin/>}
</>
  );
}

export default App;
