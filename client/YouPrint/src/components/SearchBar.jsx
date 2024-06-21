import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
   <div>
      <form className="relative">
        <input
          type="text"
          placeholder="Que recherchez-vous?"
          className="placeholder-white/60 bg-transparent px-5 xl:pr-16 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-primaryGreen xl:ml-20 w-full xl:w-80 border border-primaryGreen"
        />
        <button type="submit" className="absolute right-0 top-0 mt-2 mr-4 ">
          <CiSearch className="text-white text-xl " />
        </button>
      </form>


  
   </div>
  )
}

export default SearchBar

