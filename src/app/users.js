import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  sendPasswordResetEmail,
  confirmPasswordReset,
} from "firebase/auth";
import { auth, database } from "./firebase";

import { getStorage, uploadBytes, getDownloadURL, ref } from "firebase/storage";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";

const roles = collection(database, "roles");

export const getUserRole = async (userID) => {
  const roleRef = doc(database, "roles", userID);
  const docSnap = await getDoc(roleRef);
  if (!docSnap.exists()) throw new Error("Role does not exist");
  return docSnap.data()?.role;
};
export const getLoggedInUserRole = async () => {
  const roleRef = doc(database, "roles", auth.currentUser.uid);
  const docSnap = await getDoc(roleRef);
  if (!docSnap.exists()) throw new Error("Role does not exist");
  return docSnap.data()?.role;
};

export const addUserRole = async (userID) => {
  const response = await setDoc(doc(database, "roles", userID), {
    role: "customer",
  });

  return response;
};

export const loginUser = async ({ email, password }) => {
  const response = await signInWithEmailAndPassword(auth, email, password);

  if (!response) throw new Error("Login failed");

  const role = await getUserRole(response.user.uid);

  return {
    ...response,
    role,
  };
};

export const registerUser = async ({ name, email, password }) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);

  if (!response) throw new Error("Registering failed");

  updateProfile(response.user, {
    displayName: name,
  });

  const role = await addUserRole(response.user.uid);
  // Add their role

  return {
    ...response,
    role,
  };
};

export const loginWithPopup = async () => {
  const provider = new GoogleAuthProvider();

  const response = await signInWithPopup(auth, provider);
  //Retrieve their role

  if (!response) throw new Error("Login failed");

  const role = await addUserRole(response.user.uid);

  return {
    ...response,
    role,
  };
};

export const updateUser = async ({ name }, file) => {
  let avatarUrl = "";
  if (file) {
    avatarUrl = await uploadFile(file);
  }
  updateProfile(auth.currentUser, {
    displayName: name,
    photoURL: avatarUrl || auth.currentUser?.photoURL,
  });
};

export const uploadFile = async (file) => {
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

export const forgotPassword = async (email) => {
  const response = await sendPasswordResetEmail(auth, email);

  return response;
};

export const confirmNewPassword = async (code, newPassword) => {
  const response = await confirmPasswordReset(auth, code, newPassword);

  return response;
};
