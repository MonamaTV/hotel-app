import React from "react";
import image from "../../assets/hero.jpg";
import leave from "../../assets/leave.png";
import depart from "../../assets/arrival.png";
const Reservations = () => {
  return (
    <div>
      <div className="flex flex-row my-4 py-4">
        <img src={image} className="rounded-xl w-36" />
        <div className="mx-4 py-4">
          <h4 className="text-green-600">RESERVED</h4>
          <h4 className="flex flex-row items-center gap-x-3 text-sm">
            <img className="w-3" src={leave} />
            Expected arrival: 24 Jun 23
          </h4>
          <h4 className="flex flex-row items-center gap-x-3 text-sm">
            <img className="w-3" src={depart} />
            Expected departure: 24 Jun 23
          </h4>
          <button className="text-sm text-red-500">Cancel</button>
        </div>
      </div>
      <div className="flex flex-row my-4 py-4">
        <img src={image} className="rounded-xl w-36" />
        <div className="mx-4 py-4">
          <h4 className="text-green-600">RESERVED</h4>
          <h4 className="flex flex-row items-center gap-x-3 text-sm">
            <img className="w-3" src={leave} />
            Expected arrival: 24 Jun 23
          </h4>
          <h4 className="flex flex-row items-center gap-x-3 text-sm">
            <img className="w-3" src={depart} />
            Expected departure: 24 Jun 23
          </h4>
          <button className="text-sm text-red-500">Cancel</button>
        </div>
      </div>
      <div className="flex flex-row my-4 py-4">
        <img src={image} className="rounded-xl w-36" />
        <div className="mx-4 py-4">
          <h4 className="text-green-600">RESERVED</h4>
          <h4 className="flex flex-row items-center gap-x-3 text-sm">
            <img className="w-3" src={leave} />
            Expected arrival: 24 Jun 23
          </h4>
          <h4 className="flex flex-row items-center gap-x-3 text-sm">
            <img className="w-3" src={depart} />
            Expected departure: 24 Jun 23
          </h4>
          <button className="text-sm text-red-500">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
