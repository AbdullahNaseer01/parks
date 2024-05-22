import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyA6EunDX_ELq4R-pON-GXidbwgPUQJOYLM",
    authDomain: "national-parks-c2951.firebaseapp.com",
    projectId: "national-parks-c2951",
    storageBucket: "national-parks-c2951.appspot.com",
    messagingSenderId: "2736758913",
    appId: "1:2736758913:web:6fd5a95a64b328f8096d80"
  };

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)