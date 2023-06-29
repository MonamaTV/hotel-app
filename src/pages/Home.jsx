import Nav from "../components/Nav";

const Home = () => {
  return (
    <>
      <section className="px-5 bg-[linear-gradient(to_right_bottom,rgba(255,3,3,0.19),rgba(255,3,3,0.19)),url('./assets/hero.jpg')] h-[87vh] bg-center bg-cover flex flex-col md:flex-col items-center justify-center">
        <div className="text-white sm:w-[90%] md:w-[70%]  w-full my-3">
          <h3 className="font-bold text-3xl md:text-6xl">Secure a room</h3>
          <p className="text-sm">
            Find our available rooms at affordable prices
          </p>
        </div>
        <div className="md:w-[70%] w-full">
          <input
            className="bg-slate-200 text-txt-secondary text-sm w-full my-1 md:w-[350px] mr-1 border-none outline-none px-4 py-3"
            type="text"
            placeholder="Pick dates"
          />
          <input
            className="bg-slate-200 text-txt-secondary text-sm w-full my-1 md:w-[350px] mr-1 border-none outline-none px-4 py-3"
            type="number"
            placeholder="Number of guests"
          />
          <button className="md:w-[150px] my-1 w-full text-sm text-white bg-secondary px-3 py-3">
            Search
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
