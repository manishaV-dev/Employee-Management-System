import "./App.css";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

function App() {


  useEffect(() => {
    // setLocalStorage()
    getLocalStorage()
  }, [])

  return (
    <>
      <Login />
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  );
}

export default App;
