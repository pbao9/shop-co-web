import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { FaSearch } from 'react-icons/fa'

const SearchInput = () => {
    const [query, setQuery] = useState('')
    const [liveResults, setLiveResults] = useState([])
    const [notFound, setNotFound] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (query) {
            fetch(`https://dummyjson.com/products/search?q=${query}`)
                .then((response) => response.json())
                .then((data) => {
                    const products = data.products || []
                    setLiveResults(products)
                    setNotFound(products.length === 0)
                })
                .catch((error) =>
                    console.error('Error fetching live search:', error)
                )
        } else {
            setLiveResults([])
            setNotFound(false)
        }
    }, [query])

    const handleSearch = () => {
        if (query) {
            navigate(`/tim-kiem`, { state: { query } })
            setQuery('')
        }
    }

    return (
        <div className="relative">
            <div className="flex flex-row items-center justify-between bg-[#f0f0f0] px-3 py-2 rounded-[100px]">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search product..."
                    className="bg-[#f0f0f0] w-[100%] focus:bg-transparent border-none focus:outline-none px-3"
                />
                <button
                    onClick={handleSearch}
                    className="bg-black rounded-[50%] p-2 flex justify-center items-center"
                >
                    <FaSearch className="text-white" />
                </button>
            </div>

            {notFound && query && (
                <div className="absolute top-14 left-0 w-full bg-white my-2 py-2 shadow-lg rounded-lg z-50">
                    <div className="px-4 py-2 text-gray-500 text-center">
                        Not found items on search!
                    </div>
                </div>
            )}

            {liveResults.length > 0 && (
                <div className="absolute top-14 left-0 w-full bg-white my-2 py-2 shadow-lg rounded-lg max-h-[25rem] z-50 overflow-y-auto">
                    {liveResults.map((result) => (
                        <div
                            key={result.id}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => navigate(`/san-pham/${result.id}`)}
                        >
                            <div className="flex flex-col justify-center items-center gap-3">
                                <img
                                    src={result.thumbnail}
                                    alt={result.title}
                                    className="w-1/2 h-auto mt-2 rounded bg-black"
                                />
                                <span className="text-center">
                                    <span className="font-bold mx-2">
                                        {result.title}
                                    </span>
                                    <span className="italic ">
                                        {result.price}$
                                    </span>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchInput
