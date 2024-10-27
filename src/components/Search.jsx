import React from 'react'

const Search = ({ onSearch }) => {
    const handleChange = (event) => {
        onSearch(event.target.value)
    }

    return (
        <div className="flex justify-center my-5">
            <div className="relative w-4/5">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                        className="h-5 w-5 text-black"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                    >
                        <path
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <input
                    type="text"
                    placeholder="Search..."
                    className="border w-full border-black pl-10 pr-3 py-2 text-gray-900 placeholder-gray-400"
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}

export default Search