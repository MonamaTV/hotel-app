import React from "react";
import { MdClose } from "react-icons/md";
const Filter = ({ handleFilter, handleInput, handleSearch }) => {
  return (
    <div className="fixed z-20 top-0 left-0 bg-gray-100/80 w-screen h-screen transition-all delay-75 duration-300">
      <div className="fixed top-0 left-0 w-full md:w-[30vw] shadow-lg h-screen bg-white py-10 px-10">
        <button
          onClick={handleFilter}
          className="absolute top-10 right-10 text-red-600"
        >
          <MdClose />
        </button>
        <div>
          <p className="text-lg">Filter</p>
          <small>Search for places that serve your interest</small>
          <br />
          <form>
            <select
              className="my-3 outline-none text-sm px-4 py-3 bg-[#D3791810] block w-full"
              type="text"
              name="location"
              onChange={handleInput}
            >
              <option value="-1">Choose location</option>
              <option value="Pretoria">Pretoria</option>
              <option value="Johannesburg">Johannesburg</option>
              <option value="Cape Town">Cape Town</option>
              <option value="Polokwane">Polokwane</option>
            </select>
            <select
              className="my-3 outline-none text-sm px-4 py-3 bg-[#D3791810] block w-full"
              type="text"
              name="type"
              onChange={handleInput}
            >
              <option value="-1">Choose type</option>
              <option value="Single">Single</option>
              <option value="Double">Double</option>
              <option value="Studio">Studio</option>
              <option value="Suite">Suite</option>
            </select>
            <select
              className="my-3 outline-none text-sm px-4 py-3 bg-[#D3791810] block w-full"
              type="text"
              name="type"
            >
              <option value="Single">Choose dates</option>
            </select>
            <button
              onClick={handleSearch}
              className="disabled:bg-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed w-full py-2 px-3 bg-secondary border-none text-white text-sm"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Filter;
