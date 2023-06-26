import home from "../../assets/login.jpg";
import menu from "../../assets/menu.png";

const Reservations = () => {
  const array = Array(10).fill(0);
  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex flex-row gap-x-4">
        <button className="bg-secondary text-white rounded-xl px-10 py-2 text-sm">
          Reserved
        </button>
        <button className="bg-[#FF030330] text-white rounded-xl px-10 py-2 text-sm">
          Cancelled
        </button>
        <button className="bg-[#FF030330] text-white rounded-xl px-10 py-2 text-sm">
          Available
        </button>
      </div>
      <div className="bg-[#9a9a9a21] h-full rounded-3xl mt-4 w-full overflow-auto no-scrollbar ">
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
            {array.map((_) => {
              return (
                <tr>
                  <td className="py-3 border-b">
                    <img className="w-20 rounded-xl" src={home} alt="" />
                  </td>
                  <td className="py-3 border-b">Single</td>
                  <td className="py-3 border-b">5 Adults</td>
                  <td className="py-3 border-b">Floor 4 - AC</td>
                  <td className="py-3 border-b">
                    <div className="flex flex-col gap-y-2 text-xs">
                      <p>23 June 2023</p>
                      <p>14 July 2023</p>
                    </div>
                  </td>
                  <td className="py-3 border-b">
                    <img className="w-4 rounded-xl" src={menu} alt="" />
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
