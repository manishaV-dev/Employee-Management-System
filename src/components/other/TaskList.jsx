import React from "react";
import AcceptTask from "../TaskList/AcceptTask";
import NewTask from "../TaskList/NewTask";
import CompleteTask from "../TaskList/CompleteTask";
import FailedTask from "../TaskList/FailedTask";

function TaskList({ data }) {
  // console.log('Task List', data);

  return (
    <>
      <div
        id="tasklist"
        className="flex overflow-x-auto items-center justify-start gap-5 flex-nowrap h-[55%] w-full mt-10 py-5"
      >
        {data.tasks.map((task, index) => {
          if (task.active) {
            return <AcceptTask key={task.id || index} data={task} />;
          }
          if (task.newTask) {
            return <NewTask key={task.id || index} data={task} />;
          }
          if (task.completed) {
            return <CompleteTask key={task.id || index} data={task} />;
          }
          if (task.failed) {
            return <FailedTask key={task.id || index} data={task} />;
          }

          return null;
        })}
      </div>
    </>
  );
}

export default TaskList;
