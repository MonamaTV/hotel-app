import React from "react";
import styles from "./Loading.module.css";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className={styles.my_container}>
      <div className={styles.error}>
        <h3 className="text-3xl text-txt-main font-bold">
          Could not find what you are looking...
        </h3>
        <div className="flex flex-row space-x-3 justify-center">
          <Link
            to={"/"}
            className=" my-3 text-secondary border border-secondary py-2 px-4 text-center inline-block  "
          >
            Home
          </Link>
          <Link
            to={"/rooms"}
            className=" my-3 bg-secondary py-2 px-4 text-center inline-block text-white "
          >
            Explore rooms
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
