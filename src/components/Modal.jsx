import React, { useState } from "react";
import { MdArrowForward, MdArrowBack } from "react-icons/md";
const Modal = ({ images, handleModal }) => {
  const [current, setCurrent] = useState(0);
  const prevImage = () => {
    if (current + 1 >= images.length) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };
  const nextImage = () => {
    if (current - 1 < 0) {
      setCurrent(images.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  return (
    <div className=" z-30 fixed top-0 left-0 w-screen h-screen bg-white flex justify-center items-center px-10">
      <button
        onClick={handleModal}
        className="text-red-600 text-xs border border-red-400 hover:text-white hover:bg-red-400 transition-colors px-5 py-1 absolute top-10 right-10"
      >
        Close
      </button>
      <button onClick={prevImage} className="w-10 hover:text-secondary p-5">
        <MdArrowBack />
      </button>
      <img
        src={images[current]}
        className="md:w-[600px] w-full md:mx-10 transition-all"
      />
      <button onClick={nextImage} className="w-10 hover:text-secondary p-5">
        {" "}
        <MdArrowForward />{" "}
      </button>
    </div>
  );
};

export default Modal;
