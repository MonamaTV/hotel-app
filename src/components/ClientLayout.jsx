import { Link, Outlet } from "react-router-dom";

import { useLocation } from "react-router-dom";
import AuthProvider from "../context/AuthProvider";
const Layout = () => {
  const location = useLocation();

  const reservations = location.pathname === "/my/reservations";
  return (
    <div className="h-[100vh] container mx-auto my-5">
      <div className="flex flex-row mx-5 my-5">
        <Link
          to="/my/reservations"
          className={`border-none text-sm outline-none ${
            reservations ? "bg-secondary" : "bg-[#FF030330]"
          } mr-4 text-white px-6 py-2`}
        >
          Reservations
        </Link>
        <Link
          to="/my/account"
          className={`border-none text-sm outline-none ${
            !reservations ? "bg-secondary" : "bg-[#FF030330]"
          } mr-4 text-white px-6 py-2`}
        >
          Account
        </Link>
      </div>
      <main className="md:px-10 px-5 py-1 h-[80vh] bg-[#9a9a9a21] mx-5">
        <AuthProvider>
          <Outlet />
        </AuthProvider>
      </main>
    </div>
  );
};

export default Layout;
