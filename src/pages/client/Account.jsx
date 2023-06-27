import React from "react";
import image from "../../assets/hero.jpg";
import upload from "../../assets/upload.png";
import depart from "../../assets/arrival.png";
const Account = () => {
  return (
    <div>
      <div className="flex flex-col my-4 py-4">
        <p className="text-txt-main text-sm">Profile picture</p>
        <label
          htmlFor="avatar"
          className="py-10 flex flex-col justify-center items-center my-3 outline-none text-sm px-4 bg-[#D3791810] rounded-lg w-full"
        >
          <img src={upload} className="w-3" alt="" />
          Drag and drop or choose files to upload{" "}
        </label>
        <input
          id="avatar"
          className="hidden my-3 outline-none text-sm px-4 py-4 bg-[#D3791810] rounded-lg w-full"
          type="file"
        />
        <input
          name="name"
          placeholder="Tadima"
          className="my-3 outline-none text-sm px-4 py-4 bg-[#D3791810] block rounded-lg w-full"
          type="email"
        />
        <input
          name="name"
          placeholder="castro@test.com"
          className="my-3 outline-none text-sm px-4 py-4 bg-[#D3791810] block rounded-lg w-full"
          type="email"
        />
        <input
          name="name"
          placeholder="Enter your password"
          className="my-3 outline-none text-sm px-4 py-4 bg-[#D3791810] block rounded-lg w-full"
          type="password"
        />
        <button
          name="name"
          placeholder="Enter your password"
          className="my-3 outline-none text-sm px-4 py-3 w-96 bg-gray-500/10 text-white block rounded-lg"
          type="password"
        >
          Save changes
        </button>
      </div>
    </div>
  );
};

export default Account;
