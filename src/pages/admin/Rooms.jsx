import home from "../../assets/login.jpg";
import menu from "../../assets/menu.png";
import filter from "../../assets/filter.png";

const Rooms = () => {
  const array = Array(10).fill(0);
  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex flex-row gap-x-4 justify-between">
        <button className="bg-secondary text-white px-10 py-2 text-sm">
          Add new room
        </button>
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
              <th>Availability</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-txt-secondary text-sm">
            {array.map((_) => {
              return (
                <tr>
                  <td className="py-3 border-b">
                    <img className="w-20" src={home} alt="" />
                  </td>
                  <td className="py-3 border-b">Single</td>
                  <td className="py-3 border-b">5 Adults</td>
                  <td className="py-3 border-b">Floor 4 - AC</td>
                  <td className="py-3 border-b">
                    <div className="flex flex-col gap-y-2 text-xs">
                      <p className="text-red-500">Booked</p>
                      <p>14 Jul - 23 Aug</p>
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
