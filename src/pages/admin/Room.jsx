import { Link, useNavigate } from "react-router-dom";
import upload from "../../assets/upload.png";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { addNewRoom, uploadMultipleFiles } from "../../app/rooms";

const Room = () => {
  const [files, setFiles] = useState([]);
  const [fileURLs, setFileURLs] = useState([]);

  const navigate = useNavigate();

  //Rest of the room data
  const [room, setRoom] = useState({
    type: "",
    guests: "",
    floor: "",
    location: "",
    description: "",
    price: "",
    bedrooms: "",
    // benefits: [],
  });

  const [benefits, setBenefits] = useState([]);

  const handleRoomInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setRoom({
      ...room,
      [name]: value,
    });
  };

  const handleBenefits = (event) => {
    const value = event.target.value; //WIFI, PARKING, POOL

    if (benefits.includes(value)) {
      setBenefits((prevBenefits) =>
        prevBenefits.filter((benefit) => benefit !== value)
      );
    } else {
      setBenefits([...benefits, value]);
    }
  };

  const handleMultipleFiles = (e) => {
    const files_ = e.target.files;
    if (files_.length > 4) {
      return;
    }

    setFileURLs([]);

    for (let index = 0; index < files_.length; index++) {
      const file = files_[index];
      const url = URL.createObjectURL(file);
      const imgID = uuidv4();
      setFileURLs((prevURLs) => [...prevURLs, { url, imgID }]);
      setFiles((prevFiles) => [...prevFiles, { file, imgID }]);
    }
  };

  const handleDeleteImage = (event, imageID) => {
    event.preventDefault();

    setFileURLs((prevURLs) =>
      prevURLs.filter((image) => image.imgID !== imageID)
    );
    setFiles((files) => files.filter((image) => image.imgID !== imageID));
  };

  const handleSubmitRoom = async (event) => {
    event.preventDefault();
    event.target.disabled = true;
    const newRoom = {
      ...room,
      benefits,
    };

    try {
      const images = files.map((file) => file.file);
      const response = await addNewRoom(newRoom, images);
      if (!response) {
      }
      navigate("/admin/rooms");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" h-full w-full flex flex-col">
      <div className="flex flex-row gap-x-4 justify-between">
        <Link
          to="/admin/rooms"
          className="bg-[#FF030330] text-secondary px-10 py-2 text-sm"
        >
          Back
        </Link>
      </div>
      <div className="bg-[#9a9a9a21] h-fulll mt-4 w-full overflow-auto no-scrollbar ">
        <p className="px-10 my-3 text-txt-secondary text-lg2">Add New Room</p>
        <form className="md:px-10 px-3">
          <label
            htmlFor="avatar"
            className=" text-center cursor-pointer flex flex-col justify-center items-center my-3 outline-none text-sm  bg-[#D3791810] w-full  md:h-44 "
          >
            {fileURLs.length === 0 ? (
              <>
                <img src={upload} className="w-5" alt="" />
                <small className="hidden md:block text-xs">
                  Drag and drop or choose files to upload{" "}
                </small>
              </>
            ) : (
              <div className="flex flex-row space-x-4 ">
                {fileURLs.map((file, index) => (
                  <img
                    key={file.imgID}
                    src={file.url}
                    onClick={(e) => handleDeleteImage(e, file.imgID)}
                    className="w-32"
                    alt=""
                  />
                ))}
              </div>
            )}
          </label>
          <input
            id="avatar"
            multiple
            accept="image/*"
            className="hidden my-3 outline-none text-sm px-4 py-3 bg-[#D3791810] w-full"
            type="file"
            onChange={handleMultipleFiles}
          />

          <select
            className="my-3 outline-none text-sm px-4 py-3 bg-[#D3791810] block w-full"
            type="text"
            name="type"
            onChange={handleRoomInput}
          >
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Studio">Studio</option>
            <option value="Suite">Suite</option>
          </select>
          <input
            name="price"
            onChange={handleRoomInput}
            placeholder="Price per night"
            className="my-3 outline-none text-sm px-4 py-3 bg-[#D3791810] block w-full"
            type="text"
          />
          <input
            name="guests"
            onChange={handleRoomInput}
            placeholder="Guests allowed"
            className="my-3 outline-none text-sm px-4 py-3 bg-[#D3791810] block w-full"
            type="text"
          />
          <input
            name="floor"
            onChange={handleRoomInput}
            placeholder="Floor"
            className="my-3 outline-none text-sm px-4 py-3 bg-[#D3791810] block w-full"
            type="text"
          />
          <input
            name="bedrooms"
            onChange={handleRoomInput}
            placeholder="Number of bedrooms"
            className="my-3 outline-none text-sm px-4 py-3 bg-[#D3791810] block w-full"
            type="text"
          />
          <input
            name="location"
            onChange={handleRoomInput}
            placeholder="Location"
            className="my-3 outline-none text-sm px-4 py-3 bg-[#D3791810] block w-full"
            type="text"
          />
          <textarea
            name="description"
            onChange={handleRoomInput}
            placeholder="A detailed description of this room"
            rows={10}
            className="resize-none my-3 outline-none text-sm px-4 py-3 bg-[#D3791810] block w-full"
            type="text"
          ></textarea>
          <small>Benefits:</small>
          <div className="text-xs flex flex-row items-center gap-x-2 text-txt-primary">
            <input type="checkbox" value={"WIFI"} onChange={handleBenefits} />{" "}
            Free Wifi
          </div>
          <div className="text-xs flex flex-row items-center gap-x-2 text-txt-primary">
            <input
              type="checkbox"
              value={"PARKING"}
              onChange={handleBenefits}
            />{" "}
            Parking space
          </div>
          <div className="text-xs flex flex-row items-center gap-x-2 text-txt-primary">
            <input type="checkbox" value={"POOl"} onChange={handleBenefits} />{" "}
            Pool
          </div>
          <button
            onClick={handleSubmitRoom}
            className="my-3 outline-none text-xs px-4 py-3 w-32 bg-secondary text-white block disabled:bg-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed"
          >
            Add room
          </button>
        </form>
      </div>
    </div>
  );
};

export default Room;
