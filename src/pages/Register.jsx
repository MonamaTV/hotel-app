import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { getSignedInUser, loginWithPopup, registerUser } from "../app/users";
import { useEffect, useState } from "react";
const Register = () => {
  const [user, setUser] = useState({
    password: "",
    email: "",
    name: "",
  });

  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    getSignedInUser(setLoggedIn);
    if (loggedIn) {
      navigate("/my/account");
    }
  }, [loggedIn]);

  const handleUserInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleEmailAndPasswordRegister = async (event) => {
    event.preventDefault();

    try {
      const response = await registerUser({ ...user });
      if (!response) {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignInWithPopup = async (e) => {
    e.preventDefault();

    try {
      const response = await loginWithPopup();
      if (!response) {
        console.log(response);
      }
    } catch (error) {
      // Handle errors
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-row text text-txt-main">
      <div className="w-full px-5 md:w-[50%] h-full flex flex-col items-center justify-center">
        <div>
          <h1 className="text-5xl font-bold">
            Welcome to{" "}
            <span className="font-bold">
              <span className="text-secondary">Tad</span>Lodge
            </span>
          </h1>
          <p className="text-sm my-4">
            Find the best tooms in the North at an affordable prices
          </p>
          <button
            onClick={handleSignInWithPopup}
            className="gap-x-3 flex flex-row justify-center items-center mt-10 mb-5 text-gray-400 border border-gray-400 w-full text-sm py-3"
          >
            <FaGoogle />
            Continue with Google
          </button>
          <form>
            <div className="my-2">
              <label className="text-gray-600" htmlFor="email">
                Name
              </label>
              <input
                name="name"
                onChange={handleUserInput}
                placeholder="Enter your name"
                className="outline-none text-sm px-4 py-3 bg-[#D3791810] block w-full"
                type="email"
              />
            </div>
            <div className="my-2">
              <label className="text-gray-600" htmlFor="email">
                Email
              </label>
              <input
                name="email"
                onChange={handleUserInput}
                placeholder="Enter your email"
                className="outline-none text-sm px-4 py-3 bg-[#D3791810] block w-full"
                type="email"
              />
            </div>
            <div className="my-2">
              <label className="text-gray-600" htmlFor="password">
                Password
              </label>
              <input
                name="password"
                onChange={handleUserInput}
                placeholder="Enter your password"
                className="outline-none text-sm px-4 py-3 bg-[#D3791810] block w-full"
                type="password"
              />
            </div>
            <button
              onClick={handleEmailAndPasswordRegister}
              className="text-sm px-4 py-3 bg-secondary text-white text-center my-3 block w-full"
            >
              Register
            </button>

            <Link className="text-gray-400 text-xs" to="/login">
              Have an account? Login
            </Link>
          </form>
        </div>
      </div>
      <div className="hidden md:block w-[50%] bg-[url('./assets/register.jpg')] h-full bg-cover"></div>
    </div>
  );
};

export default Register;
