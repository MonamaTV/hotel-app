import { useEffect, useState } from "react";
import Card from "../components/Card";
import Nav from "../components/Nav";
import { MdFilterList } from "react-icons/md";
import { getAllRooms } from "../app/rooms";
import Filter from "../components/Filter";
const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [filter, setFilter] = useState({
    location: "-1",
    type: "-1",
    dates: "-1",
  });

  const handleFilterInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    e.target.disabled = true;
    e.target.textContent = "Loading...";
    await fetchRooms();
    setTimeout(() => setFilterModal(!filterModal), 2000);
  };
  const fetchRooms = async () => {
    try {
      const data = await getAllRooms(filter);
      setRooms(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const [filterModal, setFilterModal] = useState(false);
  return (
    <>
      <main className="container md:px-20 mx-auto my-5">
        <h1 className="mx-4 font-bold text-3xl md:text-2xl">Explore</h1>
        <p className="mx-4 text-gray-500 text-sm">
          From 2 June to 23 July 2023
        </p>
        {filterModal && (
          <Filter
            handleSearch={handleSearch}
            handleInput={handleFilterInputs}
            handleFilter={() => setFilterModal(!filterModal)}
          />
        )}
        <button
          onClick={() => setFilterModal(!filterModal)}
          className="mx-4 bg-secondary px-4 py-2  text-sm my-4 text-white w-32 flex flex-row items-center text-center justify-center gap-x-2"
        >
          <MdFilterList /> Filter
        </button>
        <div className="flex flex-col flex-wrap">
          {rooms.map((room) => (
            <Card key={room.id} {...room} />
          ))}
          {/* {rooms.map((room) => (
            <Card key={room.id} {...room} />
          ))} */}
        </div>
      </main>
    </>
  );
};

export default Rooms;
