import { MdLocationPin, MdPark, MdSatellite } from "react-icons/md";
import { Link } from "react-router-dom";
const Card = ({ id, location, guests, benefits, images, price }) => {
  return (
    <Link
      to={`/rooms/${id}`}
      className="flex flex-col md:flex-row items-start  my-5 mx-4 border md:p-10"
    >
      <img className="md:w-[25%] w-full h-[100%]" src={images[0]} alt="" />
      <div className="md:ml-10 mx-3 space-y-2 w-full px-7 py-5 md:py-0">
        <h3 className="font-bold text-lg text-txt-main">Double</h3>
        <p className="text-sm text-gray-700">
          {guests} guests | 1 bedroom | 2 baths
        </p>
        <div className="flex items-center text-txt-primary space-x-5 text-xs">
          <MdLocationPin />
          <p>{location}</p>
        </div>
        {benefits.includes("PARKING") && (
          <div className="flex items-center text-txt-primary space-x-5 text-xs">
            <MdPark />
            <p>Free parking space</p>
          </div>
        )}
        <div className="flex items-center text-txt-primary space-x-5 text-xs">
          <MdSatellite />
          <p>24/7 Survellience</p>
        </div>
        <div className="md:px-30 flex items-center justify-between w-full text-txt-main space-x-5 text-xs">
          <h3 className="font-bold md:text-base text-normal">
            {price} per night
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
