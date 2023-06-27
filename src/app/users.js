import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase";

export const loginUser = async ({ email, password }) => {
  const response = await signInWithEmailAndPassword(auth, email, password);

  return response;
};

export const registerUser = async ({ name, email, password }) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);

  if (response?.user) {
    updateProfile(response.user, {
      displayName: name,
    });
  }

  return response;
};

export const loginWithPopup = async () => {
  const provider = new GoogleAuthProvider();

  const response = await signInWithPopup(auth, provider);

  return response;
};
