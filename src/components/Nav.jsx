import { Link } from "react-router-dom";
import { getSignedInUser, getUser } from "../app/users";
import { useEffect, useState } from "react";

const Nav = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getSignedInUser(setUser);
  }, []);

  return (
    <header className="container mx-auto py-7 border-slate-100 border-b px-5 ">
      <nav className="flex flex-row container mx-auto justify-between ">
        <h3 className="font-bold md:text-xl text-sm">
          <Link to="/rooms">
            <span className="text-secondary">Tad</span>Rooms
          </Link>
        </h3>
        <ul className="flex flex-row items-center space-x-5">
          {!user ? (
            <>
              <li className="text-xs">
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link
                  className=" md:px-10 px-5 text-xs py-2 text-txt-main"
                  to="/login"
                >
                  Login
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link
                className="flex flex-row items-center gap-x-3 md:px-10 px-5 text-xs  text-txt-main"
                to="/my/account"
              >
                {user?.displayName}
                {user?.photoURL ? (
                  <img src={user.photoURL} className="rounded-full w-6 h-6" />
                ) : null}
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
