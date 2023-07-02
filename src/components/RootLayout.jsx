import { LocalizationProvider } from "@mui/x-date-pickers";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
const Layout = () => {
  return (
    <>
      <Nav />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Outlet />
      </LocalizationProvider>
    </>
  );
};

export default Layout;
