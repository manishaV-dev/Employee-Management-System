import React from "react";
import Header from "../other/Header";
import TaskListCard from "../other/TaskListCard";
import TaskList from "../other/TaskList";

function EmployeeDashboard() {
  return (
    <>
      <div className="p-20 bg-[#1c1c1c] h-screen">
        <Header />
        <TaskListCard />
        <TaskList />
      </div>
    </>
  );
}

export default EmployeeDashboard;
