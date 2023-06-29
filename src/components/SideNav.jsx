import { Link, useLocation } from "react-router-dom";
import reserveImg from "../assets/reserve.png";
import usersImg from "../assets/users.png";
import logoutImg from "../assets/logout.png";
import settingsImg from "../assets/settings.png";
import roomsImg from "../assets/rooms.png";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
const SideNav = () => {
  const [_, __, logout] = useContext(AuthContext);
  const { pathname } = useLocation();
  return (
    <nav className="md:p-10 w-full md:h-[80vh] md:w-[400px] md:bg-[#9a9a9a21] md:mx-5">
      <p className="text-xs text-txt-primary hidden md:block">Overview</p>
      <ul className="list-none flex flex-row md:flex-col justify-evenly">
        <li>
          <Link
            to="/admin/reservations"
            className={`my-3 mx-2 ${
              pathname === "/admin/reservations"
                ? "text-secondary"
                : "text-txt-primary"
            } flex flex-row items-center text-sm space-x-5`}
          >
            <img className="w-[20px] h-5" src={reserveImg} alt="Reservations" />
            <span className="hidden md:block">Reservations</span>
          </Link>
        </li>
        <li>
          <Link
            className={`my-3 mx-2 ${
              pathname === "/admin/rooms"
                ? "text-secondary"
                : "text-txt-primary"
            } flex flex-row items-center text-sm space-x-5`}
            to="/admin/rooms"
          >
            <img className="w-[20px] h-5" src={roomsImg} alt="Rooms" />
            <span className="hidden md:block">Rooms</span>
          </Link>
        </li>
        <li>
          <Link
            className={`my-3 mx-2 ${
              pathname === "/admin/users"
                ? "text-secondary"
                : "text-txt-primary"
            } flex flex-row items-center text-sm space-x-5`}
            to="/admin/users"
          >
            <img className="w-[20px] h-5" src={usersImg} alt="Users" />
            <span className="hidden md:block">Users</span>
          </Link>
        </li>
        <hr className="hidden md:block bg-txt-secondary h-[2px] " />
        <li>
          <Link
            className={`my-3 mx-2 ${
              pathname === "/admin/settings"
                ? "text-secondary"
                : "text-txt-primary"
            } flex flex-row items-center text-sm space-x-5`}
            to="/admin/settings"
          >
            <img
              className="w-[20px] h-5"
              src={settingsImg}
              alt="Reservations"
            />
            <span className="hidden md:block">Settings</span>
          </Link>
        </li>
        <li>
          <span
            className="cursor-pointer my-3 mx-2 text-txt-primary flex flex-row items-center text-sm space-x-5"
            onClick={logout}
          >
            <img className="w-[18px] h-4" src={logoutImg} alt="Reservations" />
            <span className="hidden md:block">Logout</span>
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
