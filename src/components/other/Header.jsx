import React from "react";

function Header({ data }) {
  return (
    <>
      <div className="flex items-end justify-between">
        <h1 className="text-2xl font-semibold">
          Hello, <br />{" "}
          <span className="text-3xl font-semibold">{data.firstName} 👋</span>
        </h1>
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-sm font-medium">
          Logout
        </button>
      </div>
    </>
  );
}

export default Header;
