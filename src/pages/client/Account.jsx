import React, { useContext, useState } from "react";
import upload from "../../assets/upload.png";
import { AuthContext } from "../../context/AuthProvider";
import { updateUser } from "../../app/users";
const Account = () => {
  const [user, _] = useContext(AuthContext);

  const [editUser, setEditUser] = useState({
    name: user?.displayName,
    email: user?.email,
    photoURL: user?.photoURL,
  });

  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState("");

  const handleFileInput = (e) => {
    const file_ = e.target.files[0];

    const url = URL.createObjectURL(file_);

    setEditUser({
      ...user,
      photoURL: url,
    });

    setFile(file_);
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();

    try {
      updateUser({ ...editUser }, file);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setEditUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="flex flex-col my-4 py-4">
        <label className="text-xs text-gray-600" htmlFor="email">
          Profile picture
        </label>
        <label
          htmlFor="avatar"
          className=" text-center cursor-pointer flex flex-col justify-center items-center my-3 outline-none text-sm  bg-[#D3791810] w-16 h-16 md:w-44 md:h-44 rounded-full"
        >
          {!editUser?.photoURL ? (
            <>
              <img src={upload} className="w-5" alt="" />
              <small className="text-xs">
                Drag and drop or choose files to upload{" "}
              </small>
            </>
          ) : (
            <img
              src={editUser?.photoURL}
              className="w-full h-full rounded-full object-cover m-0 p-0"
              alt=""
            />
          )}
        </label>
        <input
          id="avatar"
          className="hidden my-3 outline-none text-sm px-4 py-3 bg-[#D3791810] w-full"
          type="file"
          onChange={handleFileInput}
        />
        <label className="text-xs text-gray-600" htmlFor="email">
          Name
        </label>
        <input
          name="name"
          placeholder="Tadima"
          className="my-3 outline-none text-sm px-4 py-3 bg-[#D3791810] block w-full"
          type="text"
          value={editUser.name}
          onChange={handleUserInput}
        />
        <label className="text-xs text-gray-600" htmlFor="email">
          Email
        </label>
        <input
          name="email"
          placeholder="castro@test.com"
          className="my-3 outline-none text-sm px-4 py-3 bg-[#D3791810] block w-full"
          type="email"
          readOnly
          value={editUser.email}
          onChange={handleUserInput}
        />

        <button
          name="name"
          onClick={handleUpdateUser}
          placeholder="Enter your password"
          className="my-3 outline-none text-xs md:w-96 px-4 py-3 md:w-96 bg-secondary text-white block"
          type="password"
        >
          Save changes
        </button>
      </div>
    </div>
  );
};

export default Account;
