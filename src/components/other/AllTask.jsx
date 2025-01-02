import React from "react";

function AllTask() {
  return (
    <>
      <div id="alltask" className="bg-[#1c1c1c] p-5 mt-5 rounded h-40 overflow-auto">
        <div className="bg-red-400 py-2 mb-2 px-4 flex justify-between rounded">  
          <h2>Manisha</h2>
          <h3>Make a UI Design</h3>
          <h2>Status</h2>
        </div>

        <div className="bg-blue-400 py-2 mb-2 px-4 flex justify-between rounded">  
          <h2>Manisha</h2>
          <h3>Make a UI Design</h3>
          <h2>Status</h2>
        </div>


        <div className="bg-orange-400 py-2 mb-2 px-4 flex justify-between rounded">  
          <h2>Manisha</h2>
          <h3>Make a UI Design</h3>
          <h2>Status</h2>
        </div>

        <div className="bg-green-400 py-2 mb-2 px-4 flex justify-between rounded">  
          <h2>Manisha</h2>
          <h3>Make a UI Design</h3>
          <h2>Status</h2>
        </div>
      </div>
    </>
  );
}

export default AllTask;
