import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Rooms from "./pages/Rooms";
import Room from "./pages/Room";
import Layout from "./components/Layout";
import RootLayout from "./components/RootLayout";
import ClientLayout from "./components/ClientLayout";
import Reservations from "./pages/admin/Reservations";
import AdminRooms from "./pages/admin/Rooms";
import AdminRoom from "./pages/admin/Room";
import Users from "./pages/admin/Users";
import Account from "./pages/client/Account";
import ClientReservations from "./pages/client/Reservations";
import Settings from "./pages/admin/Settings";
import AuthProvider from "./context/AuthProvider";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        path: "/my",
        element: <ClientLayout />,
        children: [
          {
            path: "/my/reservations",
            element: <ClientReservations />,
          },
          {
            path: "/my/account",
            element: <Account />,
          },
        ],
      },
      {
        path: "/admin",
        element: (
          <AuthProvider>
            <Layout />
          </AuthProvider>
        ),
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
          {
            path: "/admin/new",
            element: <AdminRoom />,
          },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
