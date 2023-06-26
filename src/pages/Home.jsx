import Nav from "../components/Nav";

const Home = () => {
  return (
    <>
      <Nav />
      <section className="px-5 bg-[url('./assets/hero.jpg')] h-[494px] bg-center bg-cover flex flex-col md:flex-col items-center justify-center">
        <div className="text-white md:w-[70%] w-full my-3">
          <h3 className="font-bold text-3xl md:text-5xl">Secure a room</h3>
          <p className="text-sm">
            Find our available rooms at affordable prices
          </p>
        </div>
        <div className="md:w-[70%] w-full">
          <input
            className="text-txt-secondary text-sm w-full my-1 md:w-[500px] mr-1 border-none outline-none px-4 py-4 rounded-lg"
            type="text"
            placeholder="Pick dates"
          />
          <input
            className="text-txt-secondary text-sm w-full my-1 md:w-[500px] mr-1 border-none outline-none px-4 py-4 rounded-lg"
            type="number"
            placeholder="Number of guests"
          />
          <button className="md:w-[150px] my-1 w-full rounded-lg text-white bg-secondary px-3 py-4">
            Search
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
