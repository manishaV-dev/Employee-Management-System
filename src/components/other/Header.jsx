import React, { useState } from "react";

function Header({ changeUser }) {
  // const [userName, setUserName] = useState("");

  // if (!data) {
  //   setUserName("Admin");
  // } else {
  //   setUserName(data.firstName);
  // }

  const handleLogout = () => {
    localStorage.setItem("loggedInUser", "");
    // window.location.reload()
    // console.log(changeUser)
    // to logout without loading the page
    changeUser("");
    // jab login krte hai to loggedInUser me role assign hota hai (localstorage), ab jab logout krna hai to agar ye loggedInUser empty ho jayega to page automatically login pr chala jayega qki App.jsx me ye functionality added hai ki jab user ho tbhi login krna hai
  };

  return (
    <>
      <div className="flex items-end justify-between">
        <h1 className="text-2xl font-semibold">
          Hello, <br />{" "}
          <span className="text-3xl font-semibold">userName 👋</span>
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-sm font-medium"
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default Header;
