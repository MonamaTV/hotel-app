import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-[100vh] container mx-auto my-5">
      <div className="flex flex-row mx-5 my-5">
        <Link
          to="/my/reservations"
          className="border-none outline-none bg-secondary mr-4 text-white px-6 py-2"
        >
          Reservations
        </Link>
        <Link
          to="/my/account"
          className="border-none outline-none bg-[#FF030330] mr-4 text-white px-6 py-2"
        >
          Account
        </Link>
      </div>
      <main className="px-10 py-1 h-[80vh] bg-[#9a9a9a21] rounded-3xl mx-5">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
