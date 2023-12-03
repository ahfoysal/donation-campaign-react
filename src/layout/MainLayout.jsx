import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import { createContext, useEffect, useState } from "react";
import { getFromLocalStorage } from "../utils/LocalStorage";

export const GlobalContext = createContext();

const MainLayout = () => {
  const [donated, setDonated] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const saved = getFromLocalStorage("donated");
    setDonated(saved);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        setDonated,
        donated,
        filteredData,
        setFilteredData,
        data,
        setData,
      }}
    >
      <div>
        <div
          className="hidden bg-blue-30 bg-blue-40 bg-blue-50 bg-red-30 bg-red-40 bg-red-50
         bg-green-30 bg-green-40 bg-green-50 bg-orange-30 bg-orange-40 bg-orange-50 text-red-50 text-orange-50 text-blue-50 text-green-50"
        ></div>
        <Navbar />

        <Outlet />
      </div>
    </GlobalContext.Provider>
  );
};

export default MainLayout;
