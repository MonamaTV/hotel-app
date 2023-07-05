import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
} from "@firebase/firestore";
import { database } from "./firebase";
import { getUser } from "./users";
import { getAllRooms, getUserRooms } from "./rooms";
import { data } from "autoprefixer";

const reservationsRef = collection(database, "reservations");

export const addReservation = async (reservation) => {
  const userID = getUser().uid;
  if (!userID) throw new Error("Failed to authenticate user");

  const newReservation = {
    ...reservation,
    userID: userID,
  };

  const response = await addDoc(reservationsRef, newReservation);

  return response;
};

export const getClientRersevations = async (filters) => {
  const userID = getUser().uid;
  if (!userID) throw new Error("Failed to authenticate user");

  const reservations = [];
  const compoundQuery = query(reservationsRef, where("userID", "==", userID));

  if (filters?.state && filters.state !== "-1") {
    compoundQuery = query(
      compoundQuery,
      where("state", "==", filters.cancelled)
    );
  }

  const response = await getDocs(compoundQuery);

  if (!response) throw new Error("No reservations");

  response.forEach((reservation) => {
    if (reservation.exists()) {
      reservations.push({
        id: reservation.id,
        ...reservation.data(),
      });
    }
  });

  return reservations;
};

export const getAdminReservations = async (filters) => {
  const roomsIDs = (await getAllRooms()).map((room) => room.id);

  console.log(roomsIDs);

  const reservations = [];
  const compoundQuery = query(reservationsRef, where("roomID", "in", roomsIDs));

  if (filters?.state && filters.state !== "-1") {
    compoundQuery = query(
      compoundQuery,
      where("state", "==", filters.cancelled)
    );
  }

  const response = await getDocs(compoundQuery);

  if (!response) throw new Error("No reservations");

  response.forEach((reservation) => {
    if (reservation.exists()) {
      reservations.push({
        id: reservation.id,
        ...reservation.data(),
      });
    }
  });

  return reservations;
};

export const cancelReservation = async (reservationID) => {
  if (!reservationID) throw new Error("No reservation of that ID");

  const response = await updateDoc(
    doc(database, "reservations", reservationID),
    {
      state: "cancelled",
    }
  );

  return response;
};
