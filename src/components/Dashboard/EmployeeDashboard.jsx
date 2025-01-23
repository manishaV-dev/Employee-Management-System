import React from "react";
import Header from "../other/Header";
import TaskListCard from "../other/TaskListCard";
import TaskList from "../other/TaskList";

function EmployeeDashboard({ data, changeUser }) {
  // when login with employee email
  console.log(data); // {id: 1, firstName: 'Arjun', email: 'e@e.com', password: '123', taskCounts: {…}, …}
  return (
    <>
      <div className="p-20 bg-[#1c1c1c] h-screen">
        <Header data={data} changeUser={changeUser} />
        <TaskListCard data={data} />
        <TaskList data={data} />
      </div>
    </>
  );
}

export default EmployeeDashboard;
