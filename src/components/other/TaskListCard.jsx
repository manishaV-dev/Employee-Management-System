import React from "react";

function TaskListCard() {
  return (
    <>
      <div className="flex justify-between gap-5 mt-10">
        <div className="w-[45%] bg-red-400 py-6 px-8 rounded-xl">
          <h2 className="text-4xl font-semibold">0</h2>
          <h3 className="text-xl font-medium mt-3">New Task</h3>
        </div>

        <div className="w-[45%] bg-green-400 py-6 px-8 rounded-xl">
          <h2 className="text-4xl font-semibold">0</h2>
          <h3 className="text-xl font-medium mt-3">New Task</h3>
        </div>

        <div className="w-[45%] bg-blue-400 py-6 px-8 rounded-xl">
          <h2 className="text-4xl font-semibold">0</h2>
          <h3 className="text-xl font-medium mt-3">New Task</h3>
        </div>

        <div className="w-[45%] bg-orange-400 py-6 px-8 rounded-xl">
          <h2 className="text-4xl font-semibold">0</h2>
          <h3 className="text-xl font-medium mt-3">New Task</h3>
        </div>

      </div>
    </>
  );
}

export default TaskListCard;
