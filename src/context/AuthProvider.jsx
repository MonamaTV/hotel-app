import React, { createContext, useEffect, useState } from "react";
import { auth } from "../app/firebase";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const cleanup = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (!user) {
        navigate("/login");
      }
    });

    return () => cleanup();
  }, [user]);

  return (
    user && (
      <AuthContext.Provider value={[user, setUser]}>
        {children}
      </AuthContext.Provider>
    )
  );
};

export default AuthProvider;
