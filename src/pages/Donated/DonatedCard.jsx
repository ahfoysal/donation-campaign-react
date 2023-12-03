import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const DonatedCard = ({ item, handleRemoveFromDonate }) => {
  const { id, name, image, colors, category, donationAmount } = item || {};
  const navigate = useNavigate();
  return (
    <div
      className={` flex w-full h-fit overflow-hidden lg:items-center lg:flex-row flex-col rounded-lg bg-${colors?.bg}`}
    >
      <div className=" overflow-hidden rounded-lg rounded-b-none lg:rounded-r-none">
        <img
          src={`/${image}.jpg`}
          alt="image"
          className="lg:h-full h-full md:h-[200px]  w-full   lg:w-full lg:min-w-[250px] lg:max-w-[250px] object-cover"
        />
      </div>
      <div className="px-4 py-4 lg:px-6 md:py-5">
        <div className={`bg-${colors?.categoryBg} mb-1 w-fit p-1 rounded`}>
          <p
            className={` capitalize text-xs font-medium text-${colors?.color} `}
          >
            {category}
          </p>
        </div>
        <p
          className={`line-clamp-1 text-xl mb-1 font-semibold  text-neutral-950`}
        >
          {name}
        </p>
        <p
          className={` text-base mb-2 font-medium leading-relaxed text-blue-gray-900 text-${colors?.color}`}
        >
          ${donationAmount}
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => navigate(`/donate/${id}`)}
            className={`bg-${colors.color} py-1 px-4 font-semibold rounded-lg text-white "`}
          >
            View Details
          </button>
          <button
            onClick={() => handleRemoveFromDonate(id)}
            className={`bg-[#e72222] py-1 px-4 font-semibold rounded-lg text-white "`}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonatedCard;
