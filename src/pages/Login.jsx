import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
const Login = () => {
  const [user, setUser] = useState({
    password: "",
    email: "",
  });

  const handleUserInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleEmailAndPasswordLogin = (event) => {
    event.preventDefault();
  };

  const handleGoogleLogin = (event) => {};

  return (
    <div className="w-screen h-screen flex flex-row text text-txt-main">
      <div className="w-full px-5 md:w-[50%] h-full flex flex-col items-center justify-center">
        <div>
          <h1 className="text-5xl font-bold">Log into your account</h1>
          <p className="text-sm my-4">
            Welcome back to{" "}
            <span className="font-bold">
              <span className="text-secondary">Tad</span>Lodge
            </span>
          </p>
          <button className="gap-x-3 flex flex-row justify-center items-center mt-10 mb-5 text-gray-400 border border-gray-400 w-full text-sm py-3">
            <FaGoogle />
            Login with Google
          </button>
          <form>
            <div className="my-2">
              <label className="text-gray-600" htmlFor="email">
                Email
              </label>
              <input
                placeholder="Enter your email"
                className="outline-none text-sm px-4 py-3 bg-[#D3791810] block w-full"
                autoFocus
                type="email"
              />
            </div>
            <div className="my-2">
              <label className="text-gray-600" htmlFor="password">
                Password
              </label>
              <input
                placeholder="Enter your password"
                className="outline-none text-sm px-4 py-3 bg-[#D3791810] block w-full"
                type="password"
              />
            </div>
            <button className="text-sm px-4 py-3 bg-secondary text-white text-center my-3 block w-full">
              Login
            </button>

            <Link className="text-gray-400 text-xs" to="/register">
              Don't have an account? Register
            </Link>
          </form>
        </div>
      </div>
      <div className="hidden md:block w-[50%] bg-[url('./assets/login.jpg')] h-full bg-cover"></div>
    </div>
  );
};

export default Login;
