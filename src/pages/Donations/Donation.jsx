import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const DetailPage = () => {
  const [item, setItem] = useState({});

  const { id } = useParams();

  const items = useLoaderData();

  useEffect(() => {
    const findItem = items?.find((phone) => phone.id === id);
    setItem(findItem);
  }, [id, items]);

  return (
    <div className="container  w-[93%]   mx-auto">
      <Card item={item}></Card>
    </div>
  );
};

export default DetailPage;
