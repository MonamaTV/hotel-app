import { useNavigate, useParams } from "react-router";
import image from "../assets/hero.jpg";
import Nav from "../components/Nav";
import {
  MdLocationPin,
  MdPark,
  MdSatellite,
  MdWifi,
  MdPool,
} from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { getRoom } from "../app/rooms";
import Modal from "../components/Modal";
import Loading from "../components/Loading";
import { useSearchParams } from "react-router-dom";
import Guests from "../components/Guests";
import { Timestamp } from "@firebase/firestore";
import { addReservation } from "../app/reservations";
import { AuthContext } from "../context/AuthProvider";
import { auth } from "../app/firebase";
import Error from "../components/Error";
const Room = () => {
  const { roomID } = useParams();
  const [room, setRoom] = useState(null);
  const [modal, setModal] = useState(false);
  const [params, _] = useSearchParams();

  const [loading, setLoading] = useState(true);

  const [adults, setAdults] = useState(parseInt(params.get("adults") ?? 0));
  const [children, setChildren] = useState(
    parseInt(params.get("children") ?? 0)
  );

  const [dates, setDates] = useState({
    checkIn: params.get("checkin") ?? "",
    checkOut: params.get("checkout") ?? "",
  });

  const navigate = useNavigate();

  const user = auth.currentUser;
  const handleDateInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setDates({
      ...dates,
      [name]: value,
    });
  };
  const [showGuests, setShowGuests] = useState(false);

  const handleAdultsInput = (event, option) => {
    event.preventDefault();
    if (option === "add") {
      setAdults(adults + 1);
    } else {
      if (adults === 0) return;
      setAdults(adults - 1);
    }
  };

  const handleChildrenInput = (event, option) => {
    event.preventDefault();

    if (option === "add") {
      setChildren(children + 1);
    } else {
      if (children === 0) return;
      setChildren(children - 1);
    }
  };

  const handleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    const fetchRoom = async () => {
      setLoading(true);
      try {
        const data = await getRoom(roomID);
        setRoom(data);
      } catch (error) {
        console.log(error);
        setRoom(null);
      }
      setLoading(false);
    };
    fetchRoom();
  }, []);

  const handleReservation = async (event) => {
    event.preventDefault();
    if (!user) {
      const newQuery =
        dates.checkIn && dates.checkOut
          ? `?checkin=${dates.checkIn}&checkout=${dates.checkOut}&adults=${adults}&children=${children}`
          : "";

      event.target.disabled = true;
      event.target.textContent = "Reserving room...";
      navigate({
        pathname: "/login",
        search: newQuery ?? params.toString(),
      });
    }
    const newReservation = {
      checkIn: dates.checkIn,
      checkOut: dates.checkOut,
      reservedAt: Timestamp.now(),
      adults: adults,
      children: children,
      state: "reserverd",
      roomID: roomID,
      roomType: room.type,
      floor: room.floor,
      image: room.images[0],
    };

    try {
      await addReservation(newReservation);
      navigate({
        pathname: "/my/reservations",
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  console.log(room);

  if (!room) {
    return <Error />;
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

            <div className="sticky top-6 border px-5 md:px-10 py-6 w-full md:w-[90%] mt-5 space-y-2">
              <h3 className="text-lg font-bold text-txt-main">
                R{room.price.toLocaleString()} per night
              </h3>
              <p className="text-xs font-light text-txt-secondary">
                +ZAR 15 taxes and charges
              </p>
              <form className="w-full">
                <div className="flex flex-row justify-around">
                  <input
                    type="date"
                    className="inline border-r-2 border-white outline-none w-[50%] text-xs bg-[#D3791810] text-txt-secondary px-5 py-3 my-3"
                    placeholder="Check in"
                    onChange={handleDateInput}
                    name="checkIn"
                    defaultValue={params.get("checkout")}
                  />
                  <input
                    type="date"
                    name="checkOut"
                    onChange={handleDateInput}
                    className="inline outline-none w-[50%] text-xs bg-[#D3791810] text-txt-secondary px-5 py-3 my-3"
                    placeholder="Check out"
                    defaultValue={params.get("checkin")}
                  />
                </div>
                <div className="inline-block relative w-full">
                  <div
                    type="text"
                    onClick={() => setShowGuests(!showGuests)}
                    className="outline-none border-none w-full text-xs bg-[#D3791810] text-txt-secondary block px-5 py-3 my-3"
                  >
                    {adults + children === 0
                      ? "Number of guests"
                      : adults + " adults with " + children + " kids"}
                  </div>
                  {showGuests && (
                    <Guests
                      adults={adults}
                      children={children}
                      handleAdultsInput={handleAdultsInput}
                      handleChildrenInput={handleChildrenInput}
                    />
                  )}
                </div>
                <button
                  onClick={handleReservation}
                  className="disabled:bg-gray-300
                  disabled:text-gray-400
                  disabled:cursor-not-allowed w-full px-5 py-3 text-xs  bg-secondary  text-white"
                >
                  {user ? "PAY NOW" : "Login to pay"}
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
