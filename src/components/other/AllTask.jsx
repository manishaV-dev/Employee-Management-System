import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

function AllTask() {
  const authData = useContext(AuthContext);
  // console.log("Admin All Task", authData); // {employeeData: Array(5), adminData: Array(1)

  return (
    <>
      <div
        id="alltask"
        className="bg-[#1c1c1c] p-5 mt-5 rounded h-40 overflow-auto"
      >
        <div className="bg-red-400 py-2 mb-2 px-4 flex justify-between rounded">
          <h2 className="font-medium w-1/5">Employee</h2>
          <h3 className="font-medium w-1/5">New Task</h3>
          <h2 className="font-medium w-1/5">Active Task</h2>
          <h2 className="font-medium w-1/5">Completed</h2>
          <h2 className="font-medium w-1/5">Failed </h2>
        </div>

        {authData.employeeData.map((elem, index) => {
          return (
            <div
              className="border-2 border-emerald-500 py-2 mb-2 px-4 flex justify-between rounded"
              key={index}
            >
              <h2 className="w-1/5">{elem.firstName}</h2>
              <h3 className="text-blue-500 w-1/5 font-medium">
                {elem.taskCounts.newTask}
              </h3>
              <h2 className="text-green-500 w-1/5 font-medium">
                {elem.taskCounts.active}
              </h2>
              <h2 className="text-yellow-500 w-1/5 font-medium">
                {elem.taskCounts.completed}
              </h2>
              <h2 className="text-red-500 w-1/5 font-medium">
                {elem.taskCounts.failed}
              </h2>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AllTask;
