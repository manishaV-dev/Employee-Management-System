import "./App.css";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

function App() {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage()
  // }, [])

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      console.log("This is Admin");
    } else if (email == "user@me.com" && password == "123") {
      setUser("employee");
      console.log("This is user");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}

      {user === "admin" && <AdminDashboard />}
      {user === "employee" && <EmployeeDashboard />}
    </>
  );
}

export default App;
