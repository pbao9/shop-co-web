import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import SearchInput from "./SearchInput";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Lỗi khi khởi tạo api", error));
  }, []);

  return (
    <div>
      <SearchInput />
      <h1 className="font-bold uppercase">Danh sách sản phẩm</h1>
      <Carousel responsive={responsive}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Carousel>
    </div>
  );
};

export default ProductList;
