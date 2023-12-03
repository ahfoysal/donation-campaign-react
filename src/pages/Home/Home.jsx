import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Cards from "../../components/donations/Cards";
import { GlobalContext } from "../../layout/MainLayout";
import { useContext, useEffect } from "react";

const Home = () => {
  const { setFilteredData, filteredData, setData } = useContext(GlobalContext);

  const items = useLoaderData();
  useEffect(() => {
    setFilteredData([]);
    setData(items);
  }, [items, setData, setFilteredData]);

  return (
    <div>
      <Banner></Banner>
      <Cards items={filteredData.length > 0 ? filteredData : items} />
    </div>
  );
};

export default Home;
