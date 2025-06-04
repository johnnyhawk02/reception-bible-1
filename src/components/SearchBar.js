import { useState } from 'react'

function SearchBar({ searchTerm, setSearchTerm, placeholder = "Search this page..." }) {

  return (
    <div className="mb-6">
      <div className="max-w-md mx-auto">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-2 border border-gray-300 text-gray-900"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="ml-2 text-gray-600"
          >
            Clear
          </button>
        )}
      </div>
    </div>
  )
}

export default SearchBar