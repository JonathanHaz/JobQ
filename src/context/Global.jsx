import {React, createContext, useState, useEffect } from 'react';
import { auth, db } from '../config/firebase';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const userContext = createContext(); 

export default function Global({ children }) {
    const [user , setUser] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = (e) => {
        if (!email || !password) return;
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const newUser = userCredential.user;
            console.log(newUser);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
      };

    const handleLogin = (e) => {
        e.preventDefault();
        if (!email || !password) return;
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const newUser = userCredential.user;
            setUser(newUser);
            console.log(newUser);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
      };
    
      const handleSignOut = () => {
        signOut(auth)
          .then(() => console.log('Sign Out'))
          .catch((error) => console.log(error));
      };
    
      const handleEmailChange = (event) => setEmail(event.target.value);
      const handlePasswordChange = (event) => setPassword(event.target.value);

      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (userState) => {
          if (userState) {
            setUser(userState);
          } else {
            setUser(null);
            setResumeForms([]);
            setadminIsIn(false)
          }
        });
        return () => unsubscribe();
      }, []);
    
      const shared = {
        handleEmailChange,
        handlePasswordChange,
        handleLogin,
        handleSignUp,
        setUser,
        user,
        handleSignOut,
      };
      return <userContext.Provider value={shared}>{children}</userContext.Provider>
}
