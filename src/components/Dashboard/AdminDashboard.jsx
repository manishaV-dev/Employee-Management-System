import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

function AdminDashboard({ changeUser }) {
  return (
    <>
      <div className="h-screen w-full p-10">
        <Header changeUser={changeUser} />
        <CreateTask />
        <AllTask />
      </div>
    </>
  );
}

export default AdminDashboard;
