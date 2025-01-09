import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const TopBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };
  if (!isVisible) {
    return null;
  }

  return (
    <div className="bg-black h-10 flex flex-row justify-between items-center">
      <div className="w-10"></div>
      <span className="text-white font-lexend text-[.6rem] xl:text-[1rem] md:text-[.8rem] text-center">
        Sign up and get 20% off to your first order.{" "}
        <span className="underline">Sign up Now</span>
      </span>
      <button className="text-white mx-3" onClick={handleClose}>
        <FaTimes />
      </button>
    </div>
  );
};

export default TopBar;
