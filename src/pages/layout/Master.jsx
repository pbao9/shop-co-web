import React from "react";
import { Outlet } from "react-router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";
const Master = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fox Dev - Web App</title>
        <meta name="description" content="Fox Dev Website - App Giá rẻ" />
        <meta property="og:locale" content="vi_VN" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Xây dựng Website, Mobile Apps Android - IOS bán hàng chuyên nghiệp"
        />
        <meta
          property="og:description"
          content="Triển khai Website, Mobile Apps với giá thành tốt nhất thị trường, thời gian triển khai cực nhanh, cam kết tuyệt đối chất lượng."
        />
        <meta
          property="og:image"
          content="https://appmart.vn/public/user/assets/images/home/anhthumb.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://appmart.vn/public/user/assets/images/home/anhthumb.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="new thumbnail hcn" />
        <meta property="og:image:type" content="image/png" />
      </Helmet>
      <Header />
      <div className="page container m-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Master;
