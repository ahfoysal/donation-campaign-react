import { useContext, useState } from "react";
import DonatedCard from "./DonatedCard";
import { GlobalContext } from "../../layout/MainLayout";
import { saveToLocalStorage } from "../../utils/LocalStorage";
import swal from "sweetalert";

const Donated = () => {
  const { donated, setDonated } = useContext(GlobalContext);
  const [isShow, setIsShow] = useState(false);

  const handleRemoveFromDonate = (id) => {
    const updatedDonated = donated.filter((item) => item.id !== id);
    if (updatedDonated.length !== donated.length) {
      setDonated(updatedDonated);
      saveToLocalStorage("donated", updatedDonated);
      swal("Success!", "Item removed from donations!", "success");
    }
  };

  return (
    <div className="container  w-[93%]   mx-auto">
      <div className="my-8 ">
        {donated.length < 1 ? (
          <p className=" flex justify-center items-center h-48 md:h-72 text-lg font-semibold">
            No donation found.
          </p>
        ) : (
          <div>
            <div className="grid grid-cols-1   sm:grid-cols-2 gap-5">
              {isShow
                ? donated.map((item) => (
                    <DonatedCard
                      key={item.id}
                      item={item}
                      handleRemoveFromDonate={handleRemoveFromDonate}
                    ></DonatedCard>
                  ))
                : donated
                    .slice(0, 4)
                    .map((item) => (
                      <DonatedCard
                        key={item.id}
                        item={item}
                        handleRemoveFromDonate={handleRemoveFromDonate}
                      ></DonatedCard>
                    ))}
            </div>

            {donated.length > 4 && (
              <button
                onClick={() => setIsShow(!isShow)}
                className="mt-11 py-2 px-4 font-semibold rounded-lg text-white bg-[#009444] mx-auto block"
              >
                {isShow ? "See less" : "See All"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Donated;
