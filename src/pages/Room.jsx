import { useParams } from "react-router";
import image from "../assets/hero.jpg";
import Nav from "../components/Nav";
import {
  MdLocationPin,
  MdPark,
  MdSatellite,
  MdWifi,
  MdPool,
} from "react-icons/md";
import { useEffect, useState } from "react";
import { getRoom } from "../app/rooms";
import Modal from "../components/Modal";
import Loading from "../components/Loading";
import { useSearchParams } from "react-router-dom";
const Room = () => {
  const { roomID } = useParams();
  const [room, setRoom] = useState(null);
  const [modal, setModal] = useState(false);
  const [params, _] = useSearchParams();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoom = async () => {
      setLoading(true);
      try {
        const data = await getRoom(roomID);
        setRoom(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchRoom();
  }, []);

  const handleModal = () => {
    setModal(!modal);
  };

  const handleReservation = (event) => {};

  if (loading) {
    return <Loading />;
  }

  return (
    room && (
      <>
        {modal && <Modal handleModal={handleModal} images={room.images} />}
        <main className="container md:px-20 mx-auto md:my-10 flex md:flex-row flex-col-reverse">
          <div className="mx-4 px-1 font-bold text-4xl md:w-2/3 md:mr-10">
            <img
              onClick={handleModal}
              src={room.images[0]}
              className="w-full my-3"
            />
            <div className="flex flex-row">
              {room.images.slice(1, room.images.length).map((image, indx) => (
                <img key={indx} src={image} className="w-1/6 mr-3 " />
              ))}
            </div>

            <p className="text-xs text-txt-secondary font-normal pr-10 my-5">
              {room.description}
            </p>
          </div>
          <div className="md:mx-4 px-5 font-normal text-4xl flex flex-col md:w-2/3 w-full py-5">
            <h2 className="text-4xl font-bold text-txt-main ">{room.type}</h2>
            <p className="text-sm">
              {room.guests} guests | {room.bedrooms} bedroom | 2 baths
            </p>
            <div className="my-2 flex items-center text-gray-500 space-x-5 text-xs">
              <MdLocationPin />
              <p>{room.location}</p>
            </div>
            {room.benefits.includes("PARKING") && (
              <div className="my-2 flex items-center text-gray-500 space-x-5 text-xs">
                <MdPark />
                <p>Free parking space</p>
              </div>
            )}
            <div className="my-2 flex items-center text-gray-500 space-x-5 text-xs">
              <MdSatellite />
              <p>24/7 Survellience</p>
            </div>
            {room.benefits.includes("WIFI") && (
              <div className="my-2 flex items-center text-gray-500 space-x-5 text-xs">
                <MdWifi />
                <p>Free Wifi</p>
              </div>
            )}
            {room.benefits.includes("POOL") && (
              <div className="my-2 flex items-center text-gray-500 space-x-5 text-xs">
                <MdPool />
                <p>Pool available</p>
              </div>
            )}

            <div className="sticky top-6 border px-5 md:px-10 py-6 w-[90%] mt-5 space-y-2">
              <h3 className="text-lg font-bold text-txt-main">
                R{room.price} per night
              </h3>
              <p className="text-xs font-light text-txt-secondary">
                +ZAR 15 taxes and charges
              </p>
              <form className="w-full">
                <input
                  type="text"
                  className="outline-none border-none w-full text-xs bg-[#D3791810] block px-5 py-3 my-3"
                  placeholder="12/06/23 - 23/07/23"
                  defaultValue={
                    params.get("checkin") + " to " + params.get("checkout")
                  }
                />
                <input
                  type="text"
                  className="outline-none border-none w-full text-xs bg-[#D3791810] block px-5 py-3 my-3"
                  placeholder="2 adults + 1 kid"
                  defaultValue={`${params.get("adults")} adults + ${params.get(
                    "children"
                  )} kids`}
                />
                <button
                  onClick={handleReservation}
                  className="w-full px-5 py-3 text-xs  bg-secondary  text-white"
                >
                  PAY NOW
                </button>
              </form>
            </div>
          </div>
        </main>
      </>
    )
  );
};

export default Room;
