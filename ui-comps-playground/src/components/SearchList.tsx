import { useState } from "react";

const data = ["Яблуко", "Банан", "Картопля", "Морква", "Апельсин"];

const SearchList = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search.."
        className="border w-full p-2 mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="space-y-1">
        {data
          .filter((item) => item.toLowerCase().includes(search.toLowerCase()))
          .map((item) => (
            <li key={item} className="border p-2">
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchList;
