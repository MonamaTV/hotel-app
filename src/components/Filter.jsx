import React from "react";

const Filter = () => {
  return (
    <div className="fixed top-0 left-0 w-[20vw] shadow-lg h-screen bg-white py-10 px-10">
      <div>
        <p>Filter</p>
        <small>Search for places that serve your interest</small>
        <br />{" "}
        <form>
          <select
            className="my-3 outline-none text-sm px-4 py-3 bg-[#D3791810] block w-full"
            type="text"
            name="type"
          >
            <option value="Single">Pretoria</option>
            <option value="Double">Johannesburg</option>
            <option value="Studio">Cape Town</option>
            <option value="Suite">Polokwane</option>
          </select>
          <select
            className="my-3 outline-none text-sm px-4 py-3 bg-[#D3791810] block w-full"
            type="text"
            name="type"
          >
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
        </form>
      </div>
    </div>
  );
};

export default Filter;
