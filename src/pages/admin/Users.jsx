import home from "../../assets/user.jpg";
import menu from "../../assets/menu.png";
import filter from "../../assets/filter.png";

const Users = () => {
  const array = Array(10).fill(0);
  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex flex-row gap-x-4 justify-end">
        <div className="flex flex-row">
          <input
            className="px-10 py-2 border rounded-lg text-sm mr-3 outline-none"
            placeholder="Search users"
          />
          <button className="px-10 py-2 border rounded-lg flex flex-row  text-secondary items-center text-sm gap-x-3 bg-[#FF030330]">
            <img className="w-4 rounded-xl" src={filter} alt="" />
            Filter
          </button>
        </div>
      </div>
      <div className="bg-[#9a9a9a21] h-full rounded-3xl mt-4 w-full overflow-auto no-scrollbar ">
        <table className=" my-2 w-full px-10 border-separate border-spacing-y-3 border-spacing-x-0">
          <thead className="hidden md:table-header-group  w-full text-left px-5 h-14 text-txt-main">
            <tr className="">
              <th></th>
              <th>Names</th>
              <th>Created at</th>
              <th>Contact</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-txt-secondary text-sm">
            {array.map((_) => {
              return (
                <tr>
                  <td className="py-3 border-b">
                    <img className="w-12 h-12 rounded-full" src={home} alt="" />
                  </td>
                  <td className="py-3 border-b">Castro Solutions</td>
                  <td className="py-3 border-b">5 Aug 2023</td>
                  <td className="py-3 border-b">+27 66 401 3806</td>
                  <td className="py-3 border-b">
                    <div className="flex flex-col gap-y-2 text-xs">
                      <p className="text-red-500">Deactivated</p>
                    </div>
                  </td>
                  <td className="py-3 border-b">
                    <img
                      className="w-4 rounded-xl object-cover"
                      src={menu}
                      alt=""
                    />
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

export default Users;
