import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getUser } from "./users";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { database } from "./firebase";
import { v4 as uuidv4 } from "uuid";

const roomsRef = collection(database, "rooms");

export const uploadMultipleFiles = async (files) => {
  const promises = files.map((file) => uploadFile(file));

  const settled = await Promise.allSettled(promises);

  const images = settled.map((settle) => {
    if (settle.status === "fulfilled") {
      return settle.value;
    }
  });
  return images;
};

export const uploadFile = async (file) => {
  if (!file) throw new Error("Choose a file to upload");

  const storage = getStorage();

  const imageID = uuidv4() + "." + file.name.split(".").pop();
  const imageRef = ref(storage, `rooms/${imageID}`);

  await uploadBytes(imageRef, file);

  const url = await getDownloadURL(imageRef);
  return url;
};

export const addNewRoom = async (room, files) => {
  const urls = await uploadMultipleFiles(files);
  if (!urls || urls.length === 0)
    throw new Error("Failed to upload images. Try again");

  const userID = getUser().uid;

  const newRoom = {
    ...room,
    images: urls,
    userID,
  };
  const response = await addDoc(roomsRef, newRoom);
  return response;
};

export const getAllRooms = async (filter) => {
  let compound = query(collection(database, "rooms"));

  if (filter?.location && filter.location !== "-1") {
    compound = query(compound, where("location", "==", filter.location));
  }
  if (filter?.type && filter.type !== "-1") {
    compound = query(compound, where("type", "==", filter.type));
  }
  // if (filter?.location && filter.location !== "-1") {
  //   compound = query(
  //     collection(database, "rooms"),
  //     where("location", "==", filter.location)
  //   );
  // }

  const querySnapshot = await getDocs(compound);
  const rooms = [];
  querySnapshot.forEach((room) => {
    // doc.data() is newver undefined for query doc snapshots
    rooms.push({
      ...room.data(),
      id: room.id,
    });
  });

  return rooms;
};

export const getUserRooms = async () => {
  const userID = getUser().uid;
  const perform = query(
    collection(database, "rooms"),
    where("userID", "==", userID)
  );

  const querySnapshot = await getDocs(perform);
  const rooms = [];
  querySnapshot.forEach((room) => {
    // doc.data() is never undefined for query doc snapshots
    rooms.push({
      ...room.data(),
      id: room.id,
    });
  });

  return rooms;
};
export const getRoom = async (roomID) => {
  const docRef = doc(database, "rooms", roomID);

  const room = await getDoc(docRef);

  return {
    ...room.data(),
    id: room.id,
  };
};
