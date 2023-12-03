/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const CardItem = ({ item }) => {
  const { id, name, category, image, colors } = item || {};

  return (
    <Link to={`/donate/${id}`}>
      <div className={`flex flex-col rounded-lg bg-${colors?.bg}  `}>
        <img
          src={`/${image}.jpg`}
          className="h-full rounded-t-lg w-full object-cover"
        />

        <div className="p-4">
          <div className={`bg-${colors?.categoryBg} w-fit py-1 px-1.5 rounded`}>
            <p
              className={` capitalize text-xs font-medium text-${colors?.color} `}
            >
              {category}
            </p>
          </div>
          <p
            className={`line-clamp-1 text-base font-medium leading-relaxed text-blue-gray-900 text-${colors?.color}`}
          >
            {name}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CardItem;
