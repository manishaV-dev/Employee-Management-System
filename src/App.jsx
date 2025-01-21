import "./App.css";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { useContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";
import { data } from "autoprefixer";

function App() {
  const [user, setUser] = useState(null);
  const [loggedUserData, setLoggedUserData] = useState(null);

  const authData = useContext(AuthContext);
  // console.log(authData); // {employeeData: Array(5), adminData: Array(1)}
  // console.log(authData.employeeData);

  // Setting up who is logged in localStorage
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employeeData?.find(
        (e) => email === e.email && password === e.password
      );
      if (employee) {
        setUser("employee");
        setLoggedUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage()
  // }, [])
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}

      {user === "admin" && <AdminDashboard />}
      {user === "employee" && <EmployeeDashboard data={loggedUserData} />}
    </>
  );
}

export default App;
