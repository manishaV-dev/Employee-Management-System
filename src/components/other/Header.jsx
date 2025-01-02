import React from "react";

function Header() {
  return (
    <>
      <div className="flex items-end justify-between">
        <h1 className="text-2xl font-semibold"> 
          Hello, <br /> <span className="text-3xl font-semibold">Manisha 👋</span>
        </h1>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md font-medium">Logout</button>
      </div>
    </>
  );
}

export default Header;
