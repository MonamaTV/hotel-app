import { Link, Outlet } from "react-router-dom";

import { useLocation } from "react-router-dom";
import AuthProvider, { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";
import { auth } from "../app/firebase";
const Layout = () => {
  const location = useLocation();

  const handleLogout = () => {
    auth.signOut();
  };

  const reservations = location.pathname === "/my/reservations";
  return (
    <div className="h-[100vh] container mx-auto my-5">
      <div className="flex flex-row mx-5 my-5">
        <Link
          to="/my/account"
          className={`border-none text-sm outline-none ${
            !reservations ? "bg-secondary" : "bg-[#FF030330]"
          } mr-4 text-white px-6 py-2`}
        >
          Account
        </Link>
        <Link
          to="/my/reservations"
          className={`border-none text-sm outline-none ${
            reservations ? "bg-secondary" : "bg-[#FF030330]"
          } mr-4 text-white px-6 py-2`}
        >
          Reservations
        </Link>
        <button
          onClick={handleLogout}
          className={`border-none text-sm outline-none mr-4 text-txt-primary px-6 py-2`}
        >
          Logout
        </button>
      </div>
      <main className="md:px-10 px-5 py-1 h-[80vh] overflow-auto bg-[#9a9a9a21] mx-5">
        <AuthProvider>
          <Outlet />
        </AuthProvider>
      </main>
    </div>
  );
};

export default Layout;
