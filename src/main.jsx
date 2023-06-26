import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Rooms from "./pages/Rooms";
import Room from "./pages/Room";
import Layout from "./components/Layout";
import Reservations from "./pages/admin/Reservations";
import AdminRooms from "./pages/admin/Rooms";
import Users from "./pages/admin/Users";
import Settings from "./pages/admin/Settings";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/rooms",
    element: <Rooms />,
  },
  {
    path: "/rooms/:id",
    element: <Room />,
  },
  {
    path: "/admin",
    element: <Layout />,
    children: [
      {
        path: "/admin/reservations",
        element: <Reservations />,
      },
      {
        path: "/admin/rooms",
        element: <AdminRooms />,
      },
      {
        path: "/admin/users",
        element: <Users />,
      },
      {
        path: "/admin/settings",
        element: <Settings />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
