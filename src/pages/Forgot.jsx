import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { forgotPassword } from "../app/users";
const Forgot = () => {
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");

  const handleUserInput = (event) => {
    const value = event.target.value;

    setEmail(value);
  };

  const navigate = useNavigate();

  const handleForgotPassword = async (event) => {
    event.preventDefault();
    event.target.disabled = true;
    event.target.textContent = "Sending email...";
    console.log(email);
    try {
      await forgotPassword(email);
      navigate("/confirm-password");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setError("User not registered");
      }
      if (error.code === "auth/invalid-email") {
        setError("Enter a valid email.");
      }
      if (error.code === "auth/missing-email") {
        setError("Enter a valid email.");
      }

      event.target.disabled = false;
      event.target.textContent = "Reset";
    }
  };

  return (
    <div className="w-screen h-screen flex flex-row text text-txt-main">
      <div className="w-full px-5 md:w-[50%] h-full flex flex-col items-center justify-center">
        <div>
          <h1 className="text-5xl font-bold text-secondary">
            Reset your password
          </h1>
          <p className="text-sm my-4">
            Enter your registered email, we will send an email to reset password
          </p>

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

            {error && <small className="text-red-500">{error}</small>}
            <button
              onClick={handleForgotPassword}
              className="disabled:bg-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed text-sm px-4 py-3 bg-secondary text-white text-center my-3 block w-full"
            >
              Reset
            </button>
          </form>
        </div>
      </div>
      <div className="hidden md:block w-[50%] bg-[url('./assets/login.jpg')] h-full bg-cover"></div>
    </div>
  );
};

export default Forgot;
