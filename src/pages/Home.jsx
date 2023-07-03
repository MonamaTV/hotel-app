import { useNavigate } from "react-router-dom";
import Guests from "../components/Guests";
import Nav from "../components/Nav";
import { useState } from "react";

const Home = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [showGuests, setShowGuests] = useState(false);
  const [dates, setDates] = useState({
    checkIn: "",
    checkOut: "",
  });

  const navigate = useNavigate();
  const handleAdultsInput = (event, option) => {
    event.preventDefault();
    if (option === "add") {
      setAdults(adults + 1);
    } else {
      if (adults === 0) return;
      setAdults(adults - 1);
    }
  };

  const handleDateInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setDates({
      ...dates,
      [name]: value,
    });
  };

  const handleChildrenInput = (event, option) => {
    event.preventDefault();

    if (option === "add") {
      setChildren(children + 1);
    } else {
      if (children === 0) return;
      setChildren(children - 1);
    }
  };

  const handleSearch = () =>
    navigate({
      pathname: "/rooms",
      search: `?checkin=${dates.checkIn}&checkout=${dates.checkOut}&adults=${adults}&children=${children}`,
    });

  return (
    <>
      <section className="px-5 bg-[linear-gradient(to_right_bottom,rgba(255,3,3,0.19),rgba(255,3,3,0.19)),url('./assets/hero.jpg')] h-[87vh] bg-center bg-cover flex flex-col md:flex-col items-center justify-center">
        <div className="text-white sm:w-[90%] md:w-[70%]  w-full my-3">
          <h3 className="font-bold text-4xl md:text-6xl">Secure a room</h3>
          <p className="text-sm">
            Find our available rooms at affordable prices
          </p>
        </div>
        <div className="md:w-[70%] w-full relative">
          <input
            className="bg-white text-txt-main text-sm w-full my-1 md:w-[200px] mr-1 border-none outline-none px-4 py-3"
            placeholder="Check in"
            onFocus={(e) => (e.target.type = "date")}
            name="checkIn"
            onChange={handleDateInput}
          />
          <input
            className="bg-white text-txt-main text-sm w-full my-1 md:w-[200px] mr-1 border-none outline-none px-4 py-3"
            placeholder="Check out"
            name="checkOut"
            onFocus={(e) => (e.target.type = "date")}
            onChange={handleDateInput}
          />
          <div
            className="inline-block text-center bg-white text-txt-main text-sm w-full my-1 md:w-[200px] mr-1 border-none outline-none px-4 py-3"
            type="number"
            onClick={() => setShowGuests(!showGuests)}
            placeholder="Number of guests"
          >
            {adults + children === 0 ? "Number of guests" : adults + children}
          </div>
          {showGuests && (
            <Guests
              adults={adults}
              children={children}
              handleAdultsInput={handleAdultsInput}
              handleChildrenInput={handleChildrenInput}
            />
          )}
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
