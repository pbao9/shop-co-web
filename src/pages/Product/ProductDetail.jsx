import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";

const ProductDetail = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProductDetail(data))
      .catch((error) => console.error("Lỗi không lấy được api", error));
  }, [id]);
  if (!productDetail) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{productDetail.title}</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <h1>Chi tiết sản phẩm</h1>

      <h2>{productDetail.title}</h2>
      <p>{productDetail.description}</p>
      <img src={productDetail.thumbnail} alt={productDetail.title} />

      <h3>Tags</h3>
      <ul>
        {productDetail.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetail;
