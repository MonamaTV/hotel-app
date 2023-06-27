import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className=" py-7 shadow-sm px-5 ">
      <nav className="flex flex-row container mx-auto justify-between ">
        <h3 className="font-bold md:text-xl text-sm">
          <Link to="/rooms">
            <span className="text-secondary">Tad</span>Rooms
          </Link>
        </h3>
        <ul className="flex flex-row items-center space-x-5">
          <li className="text-xs">
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link
              className=" md:px-10 px-5 text-xs py-2 rounded-lg text-txt-main"
              to="/login"
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
