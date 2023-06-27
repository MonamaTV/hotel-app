import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase";

import { getStorage, uploadBytes, getDownloadURL, ref } from "firebase/storage";
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

export const updateUser = async ({ name }, file) => {
  let avatarUrl = "";
  if (file) {
    avatarUrl = await uploadAvatar(file);
  }
  updateProfile(auth.currentUser, {
    displayName: name,
    photoURL: avatarUrl ?? auth.currentUser?.photoURL,
  });
};

export const uploadAvatar = async (file) => {
  if (!file) throw new Error("Choose a file to upload");
  const storage = getStorage();
  const imageRef = ref(storage, `avatars/${file.name}`);
  await uploadBytes(imageRef, file);

  const url = await getDownloadURL(imageRef);
  return url;
};

export const getSignedInUser = (callback) => {
  auth.onAuthStateChanged((user) => callback(user));
};
export const getUser = () => {
  return auth.currentUser;
};
