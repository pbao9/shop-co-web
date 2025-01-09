import React, { useEffect, useState } from "react";
import { Link } from "react-router";

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
      <div className="flex flex-row space-x-3">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          className="border rounded px-2"
        />

        <button className="bg-green-400 px-2 rounded text-dark">Search</button>
      </div>

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
