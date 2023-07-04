import { arrayUnion, collection, doc, updateDoc } from "@firebase/firestore";
import { app, database } from "./firebase";
import { getUser } from "./users";
import { getUserRooms } from "./rooms";
import { v4 as uuidv4 } from "uuid";

const roomsRef = collection(database, "rooms");

export const addReservation = async (roomID, reservation) => {
  const userID = getUser().uid;
  if (!userID) throw new Error("Failed to authenticate user");

  if (!roomID) throw new Error("Room ID is invalid");

  const response = await updateDoc(doc(database, "rooms", roomID), {
    reservations: arrayUnion({
      ...reservation,
      guestID: userID,
      reservationID: uuidv4(),
    }),
  });

  return response;
};

export const getClientRersevations = (filters) => {};

export const getAdminReservations = async (filters) => {
  const reservations = [];
  const rooms = await getUserRooms();

  if (!rooms) throw new Error("No reservations");

  rooms.forEach((room) => {
    reservations.push({
      roomID: room.id,
      image: room.images[0],
      type: room.type,
      reserves: room.reservations,
    });
  });

  return reservations;
};

export const cancelRersevation = () => {};
