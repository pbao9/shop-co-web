import ProductList from "../../components/Products/ProductList";

const Home = () => {
  return (
    <div>
      Đây là nội dung trang chủ
      <div className="test">
        <img
          width={450}
          src="https://marketing1.giaodienwebmau.com/wp-content/uploads/2022/03/section-2-shape-small-3.png"
        ></img>
      </div>
      <ProductList />
    </div>
  );
};

export default Home;
