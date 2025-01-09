import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router";

const SearchResults = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const query = location.state?.query;

  useEffect(() => {
    if (query) {
      fetch(`https://dummyjson.com/products/search?q=${query}`)
        .then((response) => response.json())
        .then((data) => setProducts(data.products))
        .catch((error) => console.error("Lỗi khi tìm kiếm sản phẩm", error));
    }
  }, [query]);

  if (!query || products.length <= 0) {
    return <div>Không có từ khóa tìm kiếm hoặc không tồn tại sản phẩm!</div>;
  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tìm kiếm sản phẩm: {query}</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <h1 className="font-bold uppercase">Kết quả tìm kiếm cho: {query}</h1>
      <ul>
        {products.map((product) => (
          <div key={product.id}>
            <li>
              <a href={`/san-pham/${product.id}`}>{product.title}</a>
            </li>
            <img src={product.thumbnail} alt={product.title} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
