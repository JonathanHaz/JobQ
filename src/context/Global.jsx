import {React, createContext, useState, useEffect } from 'react';
import { auth, db } from '../config/firebase';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { addDoc, collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';

export const userContext = createContext(); 

export default function Global({ children }) {
    const [user , setUser] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userStatus , setUserStatus] = useState()
    const [userData , setUserData] = useState([])
    const docRef = collection(db, "users");
  
    const handleSubmit = async (user, username) => {
      const newResume = { idUser: user.uid, userStatus: userStatus, username: username }; 
      const FormDocRef = await addDoc(docRef, newResume);
      console.log(FormDocRef);
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
            const userDocRef = query(collection(db, "users"), where("idUser", "==", userState.uid));
            const querySnapshot = await getDocs(userDocRef);
            let additionalUserData = {};
            querySnapshot.forEach((doc) => {
              additionalUserData = { username: doc.data().username };
            });
            fetchData(userState);
            setUser({ ...userState, ...additionalUserData });
          } else {
          
            setUser(null);
          }
        });
        return () => unsubscribe();
      }, []);
      
      const getUserData = async (userState) => {
        const q = query(collection(db, 'users'), where('idUser', '==', userState.uid));
        try {
          const querySnapshot = await getDocs(q);
          if (querySnapshot.docs.length > 0) {
            const documentId = querySnapshot.docs[0].id;
            const documentRef = doc(collection(db, 'users'), documentId);
            const documentSnapshot = await getDoc(documentRef);
            if (documentSnapshot.exists()) {
              const documentData = documentSnapshot.data();
              console.log("Document data:", documentData);
              return documentData;
            } else {
              console.log("Document does not exist.");
            }
          } else {
            console.log("No matching documents found.");
          }
        } catch (error) {
          console.error("Error getting documents: ", error);
        }
      };

      const fetchData = async (userState) => {
        const Dataa = await getUserData(userState);
        setUserData(Dataa)
        console.log(userData);
      };
      const shared = {
        handleEmailChange,
        handlePasswordChange,
        handleLogin,
        handleSignUp,
        setUser,
        user,
        userData,
        handleSignOut,
        handleUserStatusChange,
        username: user ? user.username : null,
      };
      return <userContext.Provider value={shared}>{children}</userContext.Provider>
}
