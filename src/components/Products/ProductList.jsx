import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import SearchInput from "./SearchInput";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=194")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Lỗi khi khởi tạo api", error));
  }, []);

  return (
    <div>
      <SearchInput />

      <h1 className="font-bold uppercase">Danh sách sản phẩm</h1>
      <ul>
        {products.map((product) => (
          <div key={product.id}>
            <li>
              {" "}
              <Link to={`/san-pham/${product.id}`}>{product.title}</Link>{" "}
            </li>{" "}
            <img src={product.thumbnail ?? ""} alt={product.title} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
