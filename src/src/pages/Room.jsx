import image from "../assets/hero.jpg";
import Nav from "../components/Nav";
import { MdLocationPin, MdPark, MdSatellite, MdWifi } from "react-icons/md";
const Room = () => {
  return (
    <>
      <Nav />
      <main className="container md:px-20 mx-auto my-10 flex flex-row">
        <div className="mx-4 font-bold text-4xl w-2/3 mr-20">
          <img src={image} className="rounded-xl my-3" />
          <div className="flex flex-row">
            <img src={image} className="w-1/6 mr-3 rounded-xl" />
            <img src={image} className="w-1/6 mr-3 rounded-xl" />
            <img src={image} className="w-1/6 mr-3 rounded-xl" />
          </div>
          <p className="text-xs text-txt-secondary font-normal pr-10 my-5">
            Couples Beachfront Retreat.
            <br />
            NO load shedding! Designed as a space for couples. The Pool House on
            the beach has everything you need for that quality time you need.
            Unwind and enjoy being in nature on the beachfront.
            <br />
            Panoramic Ocean views, 2 Pools, Sun Loungers, Braai Lapa and private
            direct beach
          </p>
          <p className="text-xs text-txt-secondary font-normal pr-10 my-5">
            Couples Beachfront Retreat.
            <br />
            NO load shedding! Designed as a space for couples. The Pool House on
            the beach has everything you need for that quality time you need.
            Unwind and enjoy being in nature on the beachfront.
            <br />
            Panoramic Ocean views, 2 Pools, Sun Loungers, Braai Lapa and private
            direct beach
          </p>
        </div>
        <div className="mx-4 font-normal text-4xl flex flex-col w-1/3 py-5">
          <h2 className="text-4xl font-bold text-txt-primary ">Family</h2>
          <p className="text-sm">2 guests | 1 bedroom | 2 baths</p>
          <div className="my-2 flex items-center text-gray-500 space-x-5 text-xs">
            <MdLocationPin />
            <p>Polokwane, Limpopop</p>
          </div>
          <div className="my-2 flex items-center text-gray-500 space-x-5 text-xs">
            <MdPark />
            <p>Free parking space</p>
          </div>
          <div className="my-2 flex items-center text-gray-500 space-x-5 text-xs">
            <MdSatellite />
            <p>24/7 Survellience</p>
          </div>
          <div className="my-2 flex items-center text-gray-500 space-x-5 text-xs">
            <MdWifi />
            <p>Free Wifi</p>
          </div>

          <div className="bg-[#D3791820] rounded-xl px-10 py-10 w-full mt-5 space-y-2">
            <h3 className="text-lg font-bold text-txt-main">
              R2549.90 per night
            </h3>
            <p className="text-xs font-light text-txt-secondary">
              +ZAR 15 taxes and charges
            </p>
            <form className="w-full">
              <input
                type="text"
                className="outline-none border-none w-full text-sm bg-[#D9D9D9] block px-5 py-3 rounded-lg my-3"
                placeholder="12/06/23 - 23/07/23"
              />
              <input
                type="text"
                className="outline-none border-none w-full text-sm bg-[#D9D9D9] block px-5 py-3 rounded-lg my-3"
                placeholder="2 adults + 1 kid"
              />
              <button className="w-full px-5 py-3 text-sm  bg-secondary rounded-xl text-white">
                PAY NOW
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Room;