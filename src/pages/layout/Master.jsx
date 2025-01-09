import { Outlet } from "react-router";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
import TopBar from "../../components/Layouts/TopBar";
const Master = () => {
  return (
    <div className="page-content">
      <TopBar />
      <Header />
      <div className="page container m-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Master;
