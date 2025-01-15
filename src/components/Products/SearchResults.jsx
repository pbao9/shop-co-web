import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { FaInfo, FaStar } from 'react-icons/fa'
import { Link, useLocation } from 'react-router'

const SearchResults = () => {
    const [products, setProducts] = useState([])
    const [visibleProducts, setVisibleProducts] = useState([])
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    const itemsPerPage = 9
    const location = useLocation()
    const query = location.state?.query

    useEffect(() => {
        if (query) {
            setIsLoading(true)
            fetch(`https://dummyjson.com/products/search?q=${query}`)
                .then((response) => response.json())
                .then((data) => {
                    const products = data.products || []
                    setProducts(products)
                    setVisibleProducts(products.slice(0, itemsPerPage))
                })
                .catch((error) =>
                    console.error('Error fetching search results:', error)
                )
                .finally(() => setIsLoading(false))
        }
    }, [query])

    const loadMore = () => {
        const nextPage = page + 1
        const nextProducts = products.slice(0, nextPage * itemsPerPage)
        setVisibleProducts(nextProducts)
        setPage(nextPage)
    }

    if (!query || (!isLoading && products.length <= 0)) {
        return (
            <div className="font-bold font-lexend text-[404px]">
                Not found items search! Please double check before search dude
            </div>
        )
    }
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Search result: {query}</title>
            </Helmet>
            <h1 className="font-bold uppercase p-4">
                Search result found: {query}
            </h1>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
                {isLoading
                    ? Array.from({ length: itemsPerPage }).map((_, index) => (
                          <div key={index} className="border p-4 rounded-lg">
                              <div className="skeleton h-[150px] w-full"></div>
                              <div className="skeleton h-4 w-3/5 mt-2"></div>
                              <div className="skeleton h-4 w-2/5 mt-1"></div>
                          </div>
                      ))
                    : visibleProducts.map((product) => (
                          <div
                              key={product.id}
                              className="border p-4 rounded-lg"
                          >
                              <img
                                  src={product.thumbnail}
                                  alt={product.title}
                                  className="w-full h-auto mt-2"
                              />
                              <Link
                                  to={`/san-pham/${product.id}`}
                                  className="font-bold font-lexend"
                              >
                                  <span className="flex justify-center my-3">
                                      {product.title} {product.price + '$'}
                                  </span>
                                  <div className="flex justify-between items-center">
                                      <button className="btn">
                                          <FaInfo /> Detail product
                                      </button>
                                      <span className="flex flex-row items-center gap-2">
                                          {product.rating}/5{' '}
                                          <FaStar className="text-[orange]" />
                                      </span>
                                  </div>
                              </Link>
                          </div>
                      ))}
            </ul>
            {!isLoading && visibleProducts.length < products.length && (
                <div className="flex justify-center my-4">
                    <button
                        onClick={loadMore}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    )
}

export default SearchResults
