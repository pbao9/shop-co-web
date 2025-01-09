import { useState } from "react";
import { useNavigate } from "react-router";

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query) {
      navigate(`/tim-kiem`, { state: { query } });
    }
  };

  return (
    <div className="flex flex-row space-x-3">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Tìm kiếm sản phẩm..."
        className="border rounded px-2"
      />
      <button
        onClick={handleSearch}
        className="bg-green-400 px-2 rounded text-dark"
      >
        Search
      </button>
    </div>
  );
};

export default SearchInput;
