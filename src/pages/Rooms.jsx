import Card from "../components/Card";
import Nav from "../components/Nav";
import { MdFilterList } from "react-icons/md";
const Rooms = () => {
  return (
    <>
      <main className="container md:px-20 mx-auto my-5">
        <h1 className="mx-4 font-bold text-3xl md:text-2xl">Available rooms</h1>
        <p className="mx-4 text-gray-500 text-sm">
          From 2 June to 23 July 2023
        </p>
        <button className="mx-4 bg-secondary px-4 py-2  text-sm my-4 text-white w-32 flex flex-row items-center text-center justify-center gap-x-2">
          <MdFilterList /> Filter
        </button>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
    </>
  );
};

export default Rooms;
