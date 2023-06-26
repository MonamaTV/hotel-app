import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5gHuhntHXVujiXiYX9iO33gnzfQuX6F4",
  authDomain: "hotel-management-f61cf.firebaseapp.com",
  projectId: "hotel-management-f61cf",
  storageBucket: "hotel-management-f61cf.appspot.com",
  messagingSenderId: "1058208408202",
  appId: "1:1058208408202:web:7da12eb3dfb195c1b14373",
  measurementId: "G-6400MDC172",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
