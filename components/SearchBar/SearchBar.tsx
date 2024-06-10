import React from 'react'
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <>
     <div id="search-box" className=" relative w-full rounded-sm  mb-3 ">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <Search />
        </span>
        <input type="text" placeholder="Search" className="py-1 rounded-md pl-10 bg-[#252525] text-white w-full placeholder:text-white" />
      </div>
    </>
  )
}

export default SearchBar