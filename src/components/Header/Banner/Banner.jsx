import { useContext, useState } from "react";
import { GlobalContext } from "../../../layout/MainLayout";

const Banner = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, setFilteredData } = useContext(GlobalContext);

  const handleSearch = () => {
    const lowerCaseQuery = searchQuery.toLowerCase().trim();

    const filteredItems = data.filter((item) => {
      const lowerCaseCategory = item.category.toLowerCase();

      return lowerCaseCategory.includes(lowerCaseQuery);
    });

    setFilteredData(filteredItems);
  };
  return (
    <div className="h-[70vh] w-full mx-auto  bg-[url('/Banner4.png')] -mt-52 md:-mt-40  bg-cover  bg-no-repeat bg-opacity-10	bg-top flex flex-col justify-center items-center gap-10">
      <h2 className="mt-32 md:mt-0 text-center text-neutral-950 lg:text-5xl md:text-4xl sm:text-2xl text-xl font-bold ">
        I Grow By Helping People In Need
      </h2>
      <div className="flex ">
        <input
          type="text"
          className="w-full  sm:w-72 bg-white px-1.5 sm:pl-4 outline-none rounded-l-lg border border-r-0 border-neutral-200"
          placeholder="Search here...."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-red-50  sm:py-3 sm:px-4 py-2 px-2 font-semibold rounded-r-lg text-white "
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
