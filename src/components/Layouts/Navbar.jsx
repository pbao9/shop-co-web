import { useState } from "react";
import { FaBars, FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import SearchInput from "../Products/SearchInput";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex flex-row items-center">
      <nav className="hidden xl:block">
        <ul className="flex flex-row space-x-4 items-center font-lexend">
          <li className="p-2 hover:bg-black hover:text-white transition-all cursor-pointer rounded">
            Shop
          </li>
          <li className="p-2 hover:bg-black hover:text-white transition-all cursor-pointer rounded">
            On Sale
          </li>
          <li className="p-2 hover:bg-black hover:text-white transition-all cursor-pointer rounded">
            New Arrivals
          </li>
          <li className="p-2 hover:bg-black hover:text-white transition-all cursor-pointer rounded">
            Brands
          </li>
        </ul>
      </nav>

      <div className="gap-2 text-[1.1em] hidden xl:flex mx-5">
        <FaCartShopping />
        <FaRegUser />
      </div>

      <button
        className="xl:hidden block cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <FaBars />
      </button>

      <div
        className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col
         items-center gap-6 font-semibold text-lg transform transition-all z-[9999]
         ease-in-out duration-700 shadow border-b
          ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
      >
        <div className="my-3">
          <SearchInput />
        </div>
        <li className="list-none w-full text-center p-4 hover:bg-black hover:text-white transition-all cursor-pointer">
          Shop
        </li>
        <li className="list-none w-full text-center p-4 hover:bg-black hover:text-white transition-all cursor-pointer">
          On Sale
        </li>
        <li className="list-none w-full text-center p-4 hover:bg-black hover:text-white transition-all cursor-pointer">
          New Arrivals
        </li>
        <li className="list-none w-full text-center p-4 hover:bg-black hover:text-white transition-all cursor-pointer">
          Brands
        </li>
      </div>
    </div>
  );
};

export default Navbar;
