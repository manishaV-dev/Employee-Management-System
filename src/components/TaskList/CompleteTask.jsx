import React from "react";

const CompleteTask = ({ data }) => {
  return (
    <>
      <div className="flex-shrink-0 h-full w-[300px] bg-emerald-800 rounded-xl p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-gray-700 px-3 py-1 rounded-sm text-xs">
            {data.category}
          </h3>
          <h4 className="text-sm">{data.taskDate}</h4>
        </div>

        <h2 className="mt-5 text-xl font-semibold">{data.taskTitle}</h2>
        <p className="text-sm mt-2 text-gray-400">{data.taskDescription}</p>

        <div className="mt-4">
          <button className="bg-orange-600 py-1 px-2 text-sm">
            Complete Task
          </button>
        </div>
      </div>
    </>
  );
};

export default CompleteTask;
