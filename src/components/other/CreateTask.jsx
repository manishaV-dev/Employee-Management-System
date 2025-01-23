import React, { useState } from "react";

function CreateTask() {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const [newTask, setNewTask] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(taskTitle, taskDate, taskDescription, assignTo, category);

    setNewTask({
      taskTitle,
      taskDate,
      taskDescription,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });

    const data = JSON.parse(localStorage.getItem("employees"));
    console.log(data);

    // assign new task to the employee who name is equal to the assignTo and push it in tasks array
    data.forEach((em) => {
      if (assignTo === em.firstName) {
        // console.log(em);
        em.tasks.push(newTask);
        console.log(em);
      }
    });

    localStorage.setItem("employees", JSON.stringify(data));

    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
  };

  return (
    <>
      <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
        <form
          onSubmit={handleSubmit}
          className="flex items-start justify-center flex-wrap"
        >
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 placeholder:text-gray-500"
                type="text"
                placeholder="Make a UI design"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-1">Date</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 placeholder:text-gray-500"
                type="date"
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-1">Assign To</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 placeholder:text-gray-500"
                type="text"
                placeholder="Employee name"
                value={assignTo}
                onChange={(e) => setAssignTo(e.target.value)}
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-1">Category</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 placeholder:text-gray-500"
                type="text"
                placeholder="design, dev, etc"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
          </div>

          <div className="w-1/2 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-1">Description</h3>
            <textarea
              className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
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
