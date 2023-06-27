import { MdLocationPin, MdPark, MdSatellite } from "react-icons/md";
import image from "../assets/hero.jpg";
import { Link } from "react-router-dom";
const Card = () => {
  return (
    <Link
      to="/rooms/123"
      className="flex flex-col md:flex-row items-start  my-5 mx-4 border p-10"
    >
      <img className="md:w-[25%] w-full h-[100%]" src={image} alt="" />
      <div className="md:ml-10 mx-3 space-y-2 w-full px-5">
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
          <button className="bg-secondary px-4 py-2   text-white w-32 flex flex-row items-center text-center justify-center gap-x-2">
            Book
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
