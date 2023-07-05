import { useEffect, useState } from "react";
import menu from "../../assets/menu.png";
import { getAdminReservations } from "../../app/reservations";

const Reservations = () => {
  const [reservations, setReservations] = useState([]);

  const fetchReservations = async () => {
    try {
      const data = await getAdminReservations();
      setReservations(data);
    } catch (error) {
      console.log(error);
      setReservations([]);
    }
  };
  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex flex-row gap-x-4">
        <button className="bg-secondary text-white px-10 py-2 text-sm">
          Reserved
        </button>
        <button className="bg-[#FF030330] text-white px-10 py-2 text-sm">
          Cancelled
        </button>
      </div>
      <div className="bg-[#9a9a9a21] h-full mt-4 w-full overflow-auto no-scrollbar ">
        <table className=" my-2 w-full px-10 border-separate border-spacing-y-3 border-spacing-x-0">
          <thead className="hidden md:table-header-group  w-full text-left px-5 h-14 text-txt-main">
            <tr className="">
              <th></th>
              <th>Bed Type</th>
              <th>Capacity</th>
              <th>Floor</th>
              <th>Book date</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-txt-secondary text-sm">
            {reservations.map((reservation) => {
              return (
                <tr key={reservation.id}>
                  <td className="py-3 border-b">
                    <img className="w-20" src={reservation.image} alt="" />
                  </td>
                  <td className="py-3 border-b">{reservation.roomType}</td>
                  <td className="py-3 border-b">
                    {reservation.adults} Adults with {reservation.children} kids
                  </td>
                  <td className="py-3 border-b">
                    {reservation.floor || "No floor available"}
                  </td>
                  <td className="py-3 border-b">
                    <div className="flex flex-col gap-y-2 text-xs">
                      <p>{reservation.checkIn}</p>
                      <p>{reservation.checkOut}</p>
                    </div>
                  </td>
                  <td className="py-3 border-b">
                    <img className="w-4" src={menu} alt="" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reservations;
