import { Link } from "react-router-dom";
import reserveImg from "../assets/reserve.png";
import usersImg from "../assets/users.png";
import logoutImg from "../assets/logout.png";
import settingsImg from "../assets/settings.png";
import roomsImg from "../assets/rooms.png";
const SideNav = () => {
  return (
    <nav className="p-10 h-[80vh] w-[400px] bg-[#9a9a9a21] rounded-3xl mx-5">
      <p className="text-xs text-txt-primary">Overview</p>
      <ul className="list-none">
        <li>
          <Link
            to="/admin/reservations"
            className="my-6 text-txt-primary flex flex-row items-center text-sm space-x-5"
          >
            <img className="w-[20px] h-5" src={reserveImg} alt="Reservations" />
            <span>Reservations</span>
          </Link>
        </li>
        <li>
          <Link
            className="my-6 text-txt-primary flex flex-row items-center text-sm space-x-5"
            to="/admin/rooms"
          >
            <img className="w-[20px] h-5" src={roomsImg} alt="Rooms" />
            <span>Rooms</span>
          </Link>
        </li>
        <li>
          <Link
            className="my-6 text-txt-primary flex flex-row items-center text-sm space-x-5"
            to="/admin/users"
          >
            <img className="w-[20px] h-5" src={usersImg} alt="Users" />
            <span>Users</span>
          </Link>
        </li>
        <hr className="bg-txt-secondary h-[2px] " />
        <li>
          <Link
            className="my-6 text-txt-primary flex flex-row items-center text-sm space-x-5"
            to="/admin/settings"
          >
            <img
              className="w-[20px] h-5"
              src={settingsImg}
              alt="Reservations"
            />
            <span>Settings</span>
          </Link>
        </li>
        <li>
          <Link
            className="my-6 text-txt-primary flex flex-row items-center text-sm space-x-5"
            to="/admin/reservations"
          >
            <img className="w-[18px] h-4" src={logoutImg} alt="Reservations" />
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
