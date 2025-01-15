import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Product from "./Product";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const ProductCategory = ({ category }) => {
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
  const [productCategory, setProductCategory] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((response) => response.json())
      .then((data) => setProductCategory(data.products))
      .catch((error) => console.error("Lỗi không lấy được API", error));
  }, [category]);

  if (!productCategory) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Carousel responsive={responsive}>
        {productCategory.map((p) => (
          <Product key={p.id} product={p} />
        ))}
      </Carousel>
    </div>
  );
};

ProductCategory.propTypes = {
  category: PropTypes.any,
};

export default ProductCategory;
