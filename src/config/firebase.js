import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAirNDvdcu5rdNDLGr3G58gPUUfOJkU8Rw",
  authDomain: "job-q-d8a10.firebaseapp.com",
  projectId: "job-q-d8a10",
  storageBucket: "job-q-d8a10.appspot.com",
  messagingSenderId: "396131219217",
  appId: "1:396131219217:web:7d2632ae263a55a934beb0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export {db}
export {auth}