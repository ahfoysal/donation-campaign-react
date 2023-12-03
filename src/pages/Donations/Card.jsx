/* eslint-disable react/prop-types */

import swal from "sweetalert";
import { GlobalContext } from "../../layout/MainLayout";
import { useContext } from "react";
import { saveToLocalStorage } from "../../utils/LocalStorage";

const Card = ({ item }) => {
  const { id, name, description, image, donationAmount, colors } = item || {};
  const { donated, setDonated } = useContext(GlobalContext);
  const isExits = donated.find((item) => item.id === id);

  const handleAddToDonate = (item) => {
    if (!isExits) {
      const updatedDonated = [...donated, item];
      setDonated(updatedDonated);
      saveToLocalStorage("donated", updatedDonated);
      swal("Success!!", "Donated successfully!", "success");
    } else {
      swal("Error!", "No duplicates allowed!", "error");
    }
  };

  return (
    <div className="">
      <div className="relative rounded-lg overflow-hidden h-fit md:h-screen ">
        <img
          src={`/${image}.jpg`}
          alt="image"
          className="h-full w-full  object-cover rounded-lg"
        />
        <div className="absolute bottom-0 p-3 md:p-10 w-full bg-dark-30">
          {!isExits ? (
            <button
              onClick={() => handleAddToDonate(item)}
              className={` text-white bg-${colors?.color} font-semibold p-1.5 md:p-3 rounded`}
            >
              Donate ${donationAmount}
            </button>
          ) : (
            <button
              disabled
              className={` text-white bg-${colors?.color} font-semibold p-1.5 md:p-3 rounded`}
            >
              Donated
            </button>
          )}
        </div>
      </div>
      <div className="py-14">
        <h4 className="mb-4 text-xl  md:text-3xl font-bold ">{name}</h4>
        <h4 className=" block font-sans text-base text-dark-50 font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {description}
        </h4>
      </div>
    </div>
  );
};

export default Card;
