import SideNav from "./SideNav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-row items-center h-[100vh] container mx-auto">
      <SideNav />
      <main className="px-10 py-1 h-[80vh] w-full bg-white rounded-3xl mx-5">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;