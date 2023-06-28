import { useContext } from "react";
import SideNav from "./SideNav";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Layout = () => {
  const [user, _] = useContext(AuthContext);
  return (
    user.role === "admin" && (
      <div className="flex flex-col md:flex-row md:my-10 h-[100vh] container mx-auto">
        <SideNav />
        <main className="md:px-10 px-3 py-1 h-[80vh] w-full bg-white md:mx-5">
          <Outlet />
        </main>
      </div>
    )
  );
};

export default Layout;
