import { MdLocationPin, MdPark, MdSatellite } from "react-icons/md";
import image from "../assets/hero.jpg";
const Card = () => {
  return (
    <div className="bg-[#F3F3F3] flex flex-col md:flex-row items-center rounded-xl my-5 mx-4 shadow-lg">
      <img className="md:w-[25%] w-full rounded-lg" src={image} alt="" />
      <div className="md:ml-10 mx-3 space-y-2 w-full my-4 px-5">
        <h3 className="font-semibold text-2xl text-txt-main">Double</h3>
        <p className="text-sm text-gray-700">2 guests | 1 bedroom | 2 baths</p>
        <div className="flex items-center text-gray-500 space-x-5 text-xs">
          <MdLocationPin />
          <p>Polokwane, Limpopo</p>
        </div>
        <div className="flex items-center text-gray-500 space-x-5 text-xs">
          <MdPark />
          <p>Free parking space</p>
        </div>
        <div className="flex items-center text-gray-500 space-x-5 text-xs">
          <MdSatellite />
          <p>24/7 Survellience</p>
        </div>
        <div className="md:px-30 flex items-center justify-between w-full text-gray-500 space-x-5 text-xs">
          <h3 className="font-semibold md:text-lg text-normal">
            R459.90 per night
          </h3>
          <button className="bg-secondary px-4 py-2 rounded-lg my-4 text-white w-32 flex flex-row items-center text-center justify-center gap-x-2">
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
