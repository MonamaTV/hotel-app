import React, { useEffect, useState } from "react";
import image from "../../assets/hero.jpg";
import leave from "../../assets/leave.png";
import depart from "../../assets/arrival.png";
import { getClientRersevations } from "../../app/reservations";
const Reservations = () => {
  const array = Array(10).fill(0);
  const [reservations, setReservations] = useState([]);
  useEffect(() => {
    const fetchReservations = async () => {
      const data = await getClientRersevations();
      setReservations(data);
    };
    fetchReservations();
  }, []);
  return (
    <div>
      {reservations.map((reservation) => (
        <div
          key={reservation.id}
          className="items-center flex md:flex-row flex-col my-4 py-4 border-b"
        >
          <img src={reservation.image} className="md:w-48 w-24 h-36" />
          <div className="md:mx-4 py-4">
            <h4 className="text-green-600 text-xl">RESERVED</h4>
            <h4 className="flex flex-row items-center text-txt-primary gap-x-3 text-sm">
              <img className="w-3" src={leave} />
              Expected arrival: {reservation.checkIn}
            </h4>
            <h4 className="flex flex-row text-txt-primary items-center gap-x-3 text-sm">
              <img className="w-3" src={depart} />
              Expected departure: {reservation.checkOut}
            </h4>
            <button className="text-sm text-red-500">Cancel</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reservations;
