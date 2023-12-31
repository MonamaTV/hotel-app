import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getSignedInUser, loginUser, loginWithPopup } from "../app/users";
const Login = () => {
  const [user, setUser] = useState({
    password: "",
    email: "",
  });

  const [error, setError] = useState("");

  const handleUserInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(null);
  useEffect(() => {
    getSignedInUser(setLoggedIn);
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn]);

  const handleEmailAndPasswordLogin = async (event) => {
    event.preventDefault();
    event.target.disabled = true;
    try {
      await loginUser({ ...user });
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setError("User not registered");
      }
      if (error.code === "auth/invalid-email") {
        setError("Enter a valid email.");
      }
      if (error.code === "auth/missing-password") {
        setError("Enter a valid password.");
      }
      if (error.code === "auth/wrong-password") {
        setError("Email and password do not match");
      }
      event.target.disabled = false;
      console.log(error);
    }
  };

  const handleGoogleLogin = async (e) => {
    e.preventDefault();

    try {
      await loginWithPopup();
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        setError("Enter a valid email.");
      }
      if (error.code === "auth/missing-password") {
        setError("Enter a valid password.");
      }
      if (error.code === "auth/cancelled-popup-request") {
        setError("Please try again!");
      }
      if (error.code === "auth/popup-closed-by-user") {
        setError("Please try again!");
      }
      // Handle errors
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-row text text-txt-main">
      <div className="w-full px-5 md:w-[50%] h-full flex flex-col items-center justify-center">
        <div>
          <h1 className="text-5xl font-bold">Log into your account</h1>
          <p className="text-sm my-4">
            Welcome back to{" "}
            <Link to="/">
              <span className="font-bold">
                <span className="text-secondary">Tad</span>Lodge
              </span>
            </Link>
          </p>
          <button
            onClick={handleGoogleLogin}
            className="gap-x-3 flex flex-row justify-center items-center mt-10 mb-5 text-gray-400 border border-gray-400 w-full text-sm py-3"
          >
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
                type="email"
                name="email"
                onChange={handleUserInput}
              />
            </div>
            <div className="my-2">
              <label className="text-gray-600" htmlFor="password">
                Password
              </label>
              <input
                placeholder="Enter your password"
                className="outline-none text-sm px-4 py-3 bg-[#D3791810] block w-full"
                name="password"
                type="password"
                onChange={handleUserInput}
              />
              <Link className="text-gray-400 text-xs underline" to="/forgot">
                Forgot password?
              </Link>
            </div>
            {error && <small className="text-red-500">{error}</small>}
            <button
              onClick={handleEmailAndPasswordLogin}
              className="disabled:bg-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed text-sm px-4 py-3 bg-secondary text-white text-center my-3 block w-full"
            >
              Login
            </button>

            <Link className="text-gray-400 text-xs underline" to="/register">
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
