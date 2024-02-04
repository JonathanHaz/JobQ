import {React, createContext, useState, useEffect } from 'react';
import { auth, db } from '../config/firebase';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';

export const userContext = createContext(); 

export default function Global({ children }) {
    const [user , setUser] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userStatus , setUserStatus] = useState()
    const docRef = collection(db, "users");

    const handleSubmit = async (user, username) => {
      const newResume = { idUser: user.uid, userStatus: userStatus, username: username }; 
      const FormDocRef = await addDoc(docRef, newResume);
    };

    const handleSignUp = (username) => { 
      if (!email || !password) return;
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = userCredential.user;
        console.log(newUser);
        handleSubmit(newUser, username) 
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
      const handleUserStatusChange = (event) => setUserStatus(event.target.value);
      
      console.log(userStatus);
      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (userState) => {
          if (userState) {
            // User is signed in, now fetch additional user data (e.g., username)
            const userDocRef = query(collection(db, "users"), where("idUser", "==", userState.uid));
            const querySnapshot = await getDocs(userDocRef);
            let additionalUserData = {};
            querySnapshot.forEach((doc) => {
              // Assuming the document contains a field named 'username'
              additionalUserData = { username: doc.data().username };
            });
            setUser({ ...userState, ...additionalUserData }); // Combine auth user data with fetched data
          } else {
            // User is signed out
            setUser(null);
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
        handleUserStatusChange,
        username: user ? user.username : null,
      };
      return <userContext.Provider value={shared}>{children}</userContext.Provider>
}
