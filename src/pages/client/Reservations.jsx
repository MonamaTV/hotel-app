import React from "react";
import image from "../../assets/hero.jpg";
import leave from "../../assets/leave.png";
import depart from "../../assets/arrival.png";
const Reservations = () => {
  const array = Array(10).fill(0);
  return (
    <div>
      {array.map((_, index) => (
        <div
          key={index}
          className="flex md:flex-row flex-col my-4 py-4 border-b"
        >
          <img src={image} className="md:w-48 w-24" />
          <div className="md:mx-4 py-4">
            <h4 className="text-green-600">RESERVED</h4>
            <h4 className="flex flex-row items-center text-txt-primary gap-x-3 text-sm">
              <img className="w-3" src={leave} />
              Expected arrival: 24 Jun 23
            </h4>
            <h4 className="flex flex-row text-txt-primary items-center gap-x-3 text-sm">
              <img className="w-3" src={depart} />
              Expected departure: 24 Jun 23
            </h4>
            <button className="text-sm text-red-500">Cancel</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reservations;
