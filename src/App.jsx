import "./App.css";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { useContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);

  const authData = useContext(AuthContext);
  // console.log(authData); // {employeeData: Array(5), adminData: Array(1)}
  // console.log(authData.employeeData);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
    } else if (
      authData &&
      authData.employeeData?.find(
        (e) => email === e.email && password === e.password
      )
    ) {
      setUser("employee");
    } else {
      alert("Invalid Credentials");
    }
  };

  
  useEffect(() => {}, [])

  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage()
  // }, [])
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}

      {user === "admin" && <AdminDashboard />}
      {user === "employee" && <EmployeeDashboard />}
    </>
  );
}

export default App;
