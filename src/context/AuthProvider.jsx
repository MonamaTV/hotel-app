import React, { createContext, useEffect, useState } from "react";
import { auth } from "../app/firebase";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  if (user) {
    navigate("/login");
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => auth.onAuthStateChanged(null);
  }, [user]);

  return user && <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export default AuthProvider;
