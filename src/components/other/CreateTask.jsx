import React from "react";

function CreateTask() {
  return (
    <>
      <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
        <form className="flex items-start justify-center flex-wrap">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 placeholder:text-gray-500"
                type="text"
                placeholder="Make a UI design"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-1">Date</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 placeholder:text-gray-500"
                type="date"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-1">Assign To</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 placeholder:text-gray-500"
                type="text"
                placeholder="Employee name"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-1">Category</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 placeholder:text-gray-500"
                type="text"
                placeholder="design, dev, etc"
              />
            </div>
          </div>

          <div className="w-1/2 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-1">Description</h3>
            <textarea className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"></textarea>
          </div>

          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateTask;
