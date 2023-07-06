import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getSignedInUser, loginUser, loginWithPopup } from "../app/users";
const ConfirmPassword = () => {
  const [user, setUser] = useState({
    password: "",
    code: "",
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

  const handlePasswordReset = (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-screen h-screen flex flex-row text text-txt-main">
      <div className="w-full px-5 md:w-[50%] h-full flex flex-col items-center justify-center">
        <div className="px-10">
          <h1 className="text-5xl font-bold text-secondary">Password reset</h1>
          <p className="text-sm my-4">Let's reset your password</p>

          {/* <form>
            <div className="my-2">
              <label className="text-gray-600" htmlFor="email">
                Code
              </label>
              <input
                placeholder="Enter code sent to your email"
                className="outline-none text-sm px-4 py-3 bg-[#D3791810] block w-full"
                type="text"
                name="code"
                onChange={handleUserInput}
              />
            </div>
            <div className="my-2">
              <label className="text-gray-600" htmlFor="password">
                Password
              </label>
              <input
                placeholder="Enter new password"
                className="outline-none text-sm px-4 py-3 bg-[#D3791810] block w-full"
                name="password"
                type="password"
                onChange={handleUserInput}
              />
            </div>
            {error && <small className="text-red-500">{error}</small>}
            <button
              onClick={handlePasswordReset}
              className="disabled:bg-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed text-sm px-4 py-3 bg-secondary text-white text-center my-3 block w-full"
            >
              Reset
            </button>
          </form> */}
          <h4>
            An email has been sent to your email. Carefully follow the
            instructions to change your password.
          </h4>
          <Link className="text-gray-400 text-xs underline" to="/">
            Home
          </Link>
        </div>
      </div>
      <div className="hidden md:block w-[50%] bg-[url('./assets/login.jpg')] h-full bg-cover"></div>
    </div>
  );
};

export default ConfirmPassword;
