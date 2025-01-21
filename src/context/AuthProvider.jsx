import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  // const data = getLocalStorage();
  // console.log(data); // {employeeData: Array(5), adminData: Array(1)}

  useEffect(() => {
    setLocalStorage()
    const { employeeData, adminData } = getLocalStorage();
    setUserData({ employeeData, adminData });
  }, []);

  return (
    <>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
