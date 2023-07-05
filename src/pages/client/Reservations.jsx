import React, { useEffect, useState } from "react";
import image from "../../assets/hero.jpg";
import leave from "../../assets/leave.png";
import depart from "../../assets/arrival.png";
import {
  cancelReservation,
  getClientRersevations,
} from "../../app/reservations";
import { Link } from "react-router-dom";
const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  useEffect(() => {
    const fetchReservations = async () => {
      const data = await getClientRersevations();
      setReservations(data);
    };
    fetchReservations();
  }, []);

  const handleCancelReservation = async (reservationID) => {
    try {
      if (confirm("Sure you want to cancel reservation?"))
        await cancelReservation(reservationID);

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {reservations.map((reservation) => (
        <div
          key={reservation.id}
          className=" flex md:flex-row flex-col my-4 py-4 border-b"
        >
          <Link to={"/rooms/" + reservation.roomID} className="md:w-48 h-36">
            <img src={reservation.image} className="md:w-48  h-36" />
          </Link>
          <div className="md:mx-4 py-4">
            <h4
              className={
                reservation.state === "reserved"
                  ? "text-green-600 text-xl"
                  : "text-red-600 text-xl"
              }
            >
              {reservation.state === "reserved" ? "RESERVED" : "CANCELLED"}
            </h4>
            <h4 className="flex flex-row items-center text-txt-primary gap-x-3 text-sm">
              <img className="w-3" src={leave} />
              Expected arrival: {reservation.checkIn}
            </h4>
            <h4 className="flex flex-row text-txt-primary items-center gap-x-3 text-sm">
              <img className="w-3" src={depart} />
              Expected departure: {reservation.checkOut}
            </h4>
            {reservation.state === "reserved" && (
              <button
                onClick={() => handleCancelReservation(reservation.id)}
                className="text-sm text-red-500"
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reservations;
