import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyCCiMM1YSl8-xL8gMTHN9g19jkFl-raUH0",
  authDomain: "super-chat-73a4c.firebaseapp.com",
  projectId: "super-chat-73a4c",
  storageBucket: "super-chat-73a4c.appspot.com",
  messagingSenderId: "815152273800",
  appId: "1:815152273800:web:ea6265215e7788676f423d",
  measurementId: "G-5DW56ZBXDH"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
       
      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

  }

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function ChatRoom() {

}

export default App;
