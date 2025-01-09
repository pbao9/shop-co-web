import { useState } from "react";
import { useNavigate } from "react-router";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query) {
      navigate(`/tim-kiem`, { state: { query } });
    }
  };

  return (
    <div className="flex flex-row relative items-center justify-between bg-[#f0f0f0] px-3 py-2 rounded-[100px] w-auto xl:w-[577px] md:w-[440px]">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Tìm kiếm sản phẩm..."
        className="bg-[#f0f0f0] w-[100%] focus:bg-transparent border-none active:bg-transparent focus-visible:border-none focus:outline-none px-3"
      />
      <button
        onClick={handleSearch}
        className="bg-slate-500 rounded-[50%] h-10 w-11 hover:bg-slate-400 transition-all ease-in-out duration-500 group flex justify-center items-center"
      >
        <FaSearch className="text-[#fff]/40 group-hover:text-white transition-all ease-in-out duration-500" />
      </button>
    </div>
  );
};

export default SearchInput;
