import home from "../../assets/login.jpg";
import menu from "../../assets/menu.png";
import filter from "../../assets/filter.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserRooms } from "../../app/rooms";

const Rooms = () => {
  const array = Array(10).fill(0);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await getUserRooms();
        setRooms(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRooms();
  }, []);

  console.log(rooms);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex flex-row gap-x-4 justify-between">
        <Link
          to="/admin/new"
          className="bg-secondary text-white px-10 py-2 text-sm"
        >
          Add new room
        </Link>
        <div className="flex flex-row">
          <input
            className="px-10 py-1 border text-sm mr-3 outline-none"
            placeholder="Search rooms"
          />
          <button className="px-10 py-1 border flex flex-row  text-secondary items-center text-sm gap-x-3 bg-[#FF030330]">
            <img className="w-4" src={filter} alt="" />
            Filter
          </button>
        </div>
      </div>
      <div className="bg-[#9a9a9a21] h-fulll mt-4 w-full overflow-auto no-scrollbar ">
        <table className=" my-2 w-full px-10 border-separate border-spacing-y-3 border-spacing-x-0">
          <thead className="hidden md:table-header-group  w-full text-left px-5 h-14 text-txt-main">
            <tr className="">
              <th></th>
              <th>Bed Type</th>
              <th>Capacity</th>
              <th>Floor</th>
              <th>Location</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-txt-secondary text-sm">
            {rooms.map((room, index) => {
              return (
                <tr key={index}>
                  <td className="py-3 border-b">
                    <img className="w-20" src={room.images[0]} alt="" />
                  </td>
                  <td className="py-3 border-b">{room.type}</td>
                  <td className="py-3 border-b">{room.guests}</td>
                  <td className="py-3 border-b">{room.floor} </td>
                  <td className="py-3 border-b">{room.location} </td>
                  <td className="py-3 border-b">
                    <div className="flex flex-col gap-y-2 text-xs">
                      <p className="text-secondary">R{room.price}</p>
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

export default Rooms;
