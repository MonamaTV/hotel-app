import { Link } from "react-router-dom";
import { getLoggedInUserRole, getSignedInUser, getUser } from "../app/users";
import { useEffect, useState } from "react";

const Nav = () => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("");
  useEffect(() => {
    const loadUser = async () => {
      getSignedInUser(setUser);
    };

    const getRole = async () => {
      if (user) {
        const userRole = await getLoggedInUserRole();
        setRole(userRole);
      }
    };

    loadUser();
    getRole();
  }, [user]);

  return (
    <header className="container mx-auto py-7 border-slate-100 border-b px-5 ">
      <nav className="flex flex-row container items-center mx-auto justify-between ">
        <h3 className="font-bold md:text-xl text-sm">
          <Link to="/">
            <span className="text-secondary">Tad</span>Rooms
          </Link>
        </h3>
        <ul className="flex flex-row items-center space-x-1">
          <li className="md:px-5 text-xs py-2 text-txt-main">
            <Link to="/rooms">Explore</Link>
          </li>
          {!user ? (
            <>
              <li className="text-xs py-2 md:px-5">
                <Link to="/register">Register</Link>
              </li>
              <li className="md:px-5 text-xs py-2 text-secondary">
                <Link to="/login">Login</Link>
              </li>
            </>
          ) : (
            <li>
              <Link
                className="flex flex-row items-center gap-x-3 md:pr-10 px-5 text-xs text-secondary"
                to={role === "admin" ? "/admin/reservations" : "/my/account"}
              >
                {user?.displayName}
                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    className="rounded-full object-cover w-6 h-6"
                  />
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
