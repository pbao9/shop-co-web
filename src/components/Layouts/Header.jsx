import { Link } from "react-router";
import SearchInput from "../Products/SearchInput";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="border-b shadow py-3">
      <header className="container m-auto flex flex-row items-center justify-between space-x-10 px-3 xl:px-0">
        <div className="logo font-bold font-lexend text-[2rem]">
          <Link to={"/"}>SHOP.CO</Link>
        </div>
        <div className="hidden md:block">
          <SearchInput />
        </div>
        <Navbar />
      </header>
    </div>
  );
};

export default Header;
