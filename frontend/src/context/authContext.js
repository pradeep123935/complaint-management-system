import { createContext, useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(
    localStorage.getItem("userDetails")
  );

  const setDetails = (details) => {
    setUserDetails(details);
  };

  useEffect(() => {
    localStorage.setItem("userDetails", userDetails);
  }, [userDetails]);

  return (
    <AuthContext.Provider value={{ userDetails, setDetails }}>
      {children};
    </AuthContext.Provider>
  );
};
