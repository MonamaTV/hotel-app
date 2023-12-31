import React, { createContext, useEffect, useState } from "react";
import { auth } from "../app/firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { getUserRole } from "../app/users";
import Loading from "../components/Loading";

export const locations = ["/admin/"];

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const location = useLocation();

  const isAdmin = location.pathname.startsWith("/admin");

  const logoutUser = () => auth.signOut();

  useEffect(() => {
    const setUserOnChange = async (user) => {
      if (!user) {
        navigate("/login");
        return;
      }

      const role = await getUserRole(user.uid);
      if (isAdmin && role !== "admin") {
        navigate("/my/account");
        return;
      }
      setUser({
        ...user,
        role,
      });
    };

    const cleanup = auth.onAuthStateChanged(setUserOnChange);
    return () => cleanup();
  }, []);

  return user ? (
    <AuthContext.Provider value={[user, setUser, logoutUser]}>
      {children}
    </AuthContext.Provider>
  ) : (
    <Loading />
  );
};

export default AuthProvider;
