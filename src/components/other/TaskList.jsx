import React from "react";
import AcceptTask from "../TaskList/AcceptTask";
import NewTask from "../TaskList/NewTask";
import CompleteTask from "../TaskList/CompleteTask";
import FailedTask from "../TaskList/FailedTask";

function TaskList() {
  return (
    <>
      <div
        id="tasklist"
        className="flex overflow-x-auto items-center justify-start gap-5 flex-nowrap h-[55%] w-full mt-10 py-5"
      >
        <AcceptTask />
        <NewTask />
        <CompleteTask />
        <FailedTask />
      </div>
    </>
  );
}

export default TaskList;
