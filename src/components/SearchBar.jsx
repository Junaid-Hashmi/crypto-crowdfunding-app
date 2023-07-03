import React from "react";
import { useGlobalState } from "../store";

const SearchBar = () => {
  return (
    <div className="mx-auto h-12 border rounded-full w-[560px] my-8 pl-3 pr-1 flex justify-between items-center">
      <input
        type="text"
        placeholder="Search for Campaigns"
        className="bg-inherit border-none active:outline-none flex-1 mr-2"
      />
      <button className="bg-green-600 hover:bg-green-700 rounded-full h-[80%] px-3 text-white">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
