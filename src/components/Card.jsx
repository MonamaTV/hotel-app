import { MdLocationPin, MdPark, MdSatellite } from "react-icons/md";
import { Link } from "react-router-dom";
const Card = ({
  id,
  location,
  guests,
  benefits,
  images,
  price,
  type,
  bedrooms,
}) => {
  return (
    <Link
      to={`/rooms/${id}`}
      className="flex flex-col md:flex-row items-start mx-4 border-b   md:py-10 pl-0"
    >
      <div className="md:w-[30%]">
        <img className="w-full" src={images[0]} alt="Image" />
        <div className="flex-row space-x-2 mt-3 hidden md:flex">
          {images.map((image, index) => (
            <img
              key={index}
              className="md:w-10 w-full "
              src={image}
              alt="Image"
            />
          ))}
        </div>
      </div>
      <div className="md:ml-10 mx-3 space-y-2 w-full px-7 py-5 md:py-0">
        <h3 className="font-bold text-lg text-txt-main">{type}</h3>
        <p className="text-sm text-gray-700">
          {guests} guests | {bedrooms} bedroom | 2 baths
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
            R{price} per night
          </h3>
          {/* <button className="bg-secondary px-4 py-2   text-white w-32 flex flex-row items-center text-center justify-center gap-x-2">
            Book
          </button> */}
        </div>
      </div>
    </Link>
  );
};

export default Card;
