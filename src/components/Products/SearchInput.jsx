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
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        <FaSearch />
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg my-3">Search Product!</h3>
          <div className="flex flex-row relative items-center justify-between bg-[#f0f0f0] px-3 py-2 rounded-[100px] ">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search product..."
              className="bg-[#f0f0f0] w-[100%] focus:bg-transparent border-none active:bg-transparent focus-visible:border-none focus:outline-none px-3"
            />
            <button
              onClick={handleSearch}
              className="bg-black rounded-[50%] h-10 w-11 hover: transition-all ease-in-out duration-500 group flex justify-center items-center"
            >
              <FaSearch className="text-white" />
            </button>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default SearchInput;
