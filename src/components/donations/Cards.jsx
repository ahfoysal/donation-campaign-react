/* eslint-disable react/prop-types */

import CardItem from "./Card";

const Cards = ({ items }) => {
  return (
    <div className="container  w-[93%]   mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-6 md:py-10">
      {items?.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Cards;
