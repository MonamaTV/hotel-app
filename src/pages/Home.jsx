import { useNavigate } from "react-router-dom";
import Guests from "../components/Guests";
import Nav from "../components/Nav";
import { useState } from "react";
import { DatePicker, MobileDatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

const Home = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const navigate = useNavigate();
  const handleAdultsInput = (event) => {
    event.preventDefault();
  };

  const handleChildrenInput = (event) => {
    event.preventDefault();
  };

  const handleSearch = () =>
    navigate("/rooms", {
      state: "two",
    });

  return (
    <>
      <section className="px-5 bg-[linear-gradient(to_right_bottom,rgba(255,3,3,0.19),rgba(255,3,3,0.19)),url('./assets/hero.jpg')] h-[87vh] bg-center bg-cover flex flex-col md:flex-col items-center justify-center">
        <div className="text-white sm:w-[90%] md:w-[70%]  w-full my-3">
          <h3 className="font-bold text-3xl md:text-6xl">Secure a room</h3>
          <p className="text-sm">
            Find our available rooms at affordable prices
          </p>
        </div>
        <div className="md:w-[70%] w-full relative">
          <DatePicker
            className="bg-white text-txt-main text-xs w-full my-1 md:w-[350px] mr-1 !border-none !outline-none px-4 py-0"
            disablePast
          />
          <DatePicker
            className="bg-white text-txt-main text-xs w-full my-1 md:w-[350px] mr-1 !border-none !outline-none px-4 py-0"
            disablePast
          />
          <input
            className="bg-white text-txt-main text-sm w-full my-1 md:w-[350px] mr-1 border-none outline-none px-4 py-3"
            type="number"
            defaultValue={12}
            placeholder="Number of guests"
          />
          <Guests
            handleAdultsInput={handleAdultsInput}
            handleChildrenInput={handleChildrenInput}
          />
          <button
            onClick={handleSearch}
            className="md:w-[150px] my-1 w-full text-sm text-white bg-secondary px-3 py-3"
          >
            Search
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
