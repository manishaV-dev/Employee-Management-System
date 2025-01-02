import React from "react";

function Header() {
  return (
    <>
      <div className="flex items-end justify-between text-white">
        <h1 className="text-2xl font-semibold"> 
          Hello, <br /> <span className="text-3xl font-semibold">Manisha 👋</span>
        </h1>
        <button className="bg-red-500 text-white px-5 py-2 rounded-sm">Logout</button>
      </div>
    </>
  );
}

export default Header;
