import React, { useState } from 'react'
import React, { createContext, useState, useEffect } from 'react';
import { auth, db } from '../config/firebase';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const userContext = createContext(); 

export default function Global() {
    const [user , setUser] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <div>
      
    </div>
  )
}
