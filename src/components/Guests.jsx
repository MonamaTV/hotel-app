import React from "react";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
const Guests = ({
  children,
  adults,
  handleAdultsInput,
  handleChildrenInput,
}) => {
  return (
    <div className="absolute right-[255px] bg-white w-2/6">
      <p className="text-txt-main my-3 px-6 text-sm">Select Guests</p>
      <form>
        <div className="flex items-center flex-row justify-between my-3 px-6 text-xs text-txt-primary">
          <label htmlFor="adults">Adults</label>
          <div className="space-x-2">
            <button>
              <CgMathMinus />
            </button>
            <input
              defaultValue={0}
              className="border-2 border-secondary py-2 w-10 text-center outline-none "
              type="text"
            />
            <button>
              <CgMathPlus />
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-between my-3 px-6 text-xs text-txt-primary">
          <label htmlFor="adults">Children</label>
          <div className="space-x-2">
            <button>
              <CgMathMinus />
            </button>
            <input
              defaultValue={0}
              className="border-2 border-secondary py-2 w-10 text-center outline-none "
              type="text"
            />
            <button>
              <CgMathPlus />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Guests;
