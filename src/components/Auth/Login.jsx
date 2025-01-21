import React, { useState } from "react";

function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("Form Submitted", email, password);
    handleLogin(email, password); // by this fun -we pass login data to the app component--- child to parent
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="flex h-screen w-full items-center justify-center">
        <div className="border-2 border-purple-400 px-10 py-20 rounded-lg">
          <form
            onSubmit={submitHandler}
            className="flex flex-col items-center justify-center"
          >
            <input
              className="text-white border-2 border-purple-400 px-5 py-2 rounded-full text-sm outline-none bg-transparent placeholder:text-gray-400"
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="text-white border-2 border-purple-400 px-5 py-2 rounded-full text-sm outline-none bg-transparent placeholder:text-gray-400 mt-3"
              type="password"
              required
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="text-white border-none px-8 py-2 rounded-full text-sm outline-none bg-purple-600 placeholder:text-gray-400 mt-3">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
