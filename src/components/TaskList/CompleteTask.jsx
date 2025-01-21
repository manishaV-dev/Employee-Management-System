import React from "react";

const CompleteTask = () => {
  return (
    <>
      <div className="flex-shrink-0 h-full w-[300px] bg-emerald-800 rounded-xl p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-gray-700 px-3 py-1 rounded-sm text-xs">High</h3>
          <h4 className="text-sm">02 Jan 2025</h4>
        </div>

        <h2 className="mt-5 text-xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2 text-gray-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi quia
          dignissimos modi. Distinctio, asperiores eveniet.
        </p>

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
