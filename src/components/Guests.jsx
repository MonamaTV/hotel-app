import React from "react";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
const Guests = ({
  children,
  adults,
  handleAdultsInput,
  handleChildrenInput,
}) => {
  return (
    <div className="absolute right-[708px] bg-white w-[200px] shadow-2xl">
      <p className="text-txt-main my-3 px-6 text-sm">Select Guests</p>
      <form>
        <div className="flex items-center flex-row justify-between my-3 px-6 text-xs text-txt-primary">
          <label htmlFor="adults">Adults</label>
          <div className="space-x-2">
            <button onClick={(e) => handleAdultsInput(e, "minus")}>
              <CgMathMinus />
            </button>
            <input
              value={adults}
              readOnly
              className="border-2 border-secondary py-2 w-10 text-center outline-none "
              type="text"
            />
            <button onClick={(e) => handleAdultsInput(e, "add")}>
              <CgMathPlus />
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-between my-3 px-6 text-xs text-txt-primary">
          <label htmlFor="adults">Children</label>
          <div className="space-x-2">
            <button onClick={(e) => handleChildrenInput(e, "minus")}>
              <CgMathMinus />
            </button>
            <input
              value={children}
              className="border-2 border-secondary py-2 w-10 text-center outline-none "
              type="text"
              readOnly
            />
            <button onClick={(e) => handleChildrenInput(e, "add")}>
              <CgMathPlus />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Guests;
