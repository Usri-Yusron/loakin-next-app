"use client"

import { useState } from "react"
import { Search } from "lucide-react"

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div
        className={`relative w-full max-w-md transition-all duration-300 ease-in-out ${isFocused ? "scale-105" : "scale-100"}`}
      >
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-3 pl-12 pr-4 text-gray-200 bg-gray-800 rounded-full outline-none ring-2 ring-gray-700 focus:ring-blue-500 transition-all duration-300"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <Search
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-300 ${isFocused ? "text-blue-500" : ""}`}
        />
      </div>
    </div>
  )
}

export default SearchBar

