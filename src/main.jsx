import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.jsx";
import Home from "./pages/Home/Home.jsx";
import Dashboard from "./pages/Users/Dashboard.jsx";
import Master from "./pages/layout/Master.jsx";
import ProductDetail from "./pages/Product/ProductDetail.jsx";
import SearchResults from "./components/Products/SearchResults.jsx";
import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Master />}>
        <Route index element={<Home />} />
        <Route path="/nguoi-dung/:id" element={<Dashboard />} />
        <Route path="/san-pham/:id" element={<ProductDetail />} />
        <Route path="/tim-kiem" element={<SearchResults />} />
      </Route>
      <Route path="/dang-nhap" element={<Login />} />
      <Route path="/dang-ky" element={<Register />} />
    </Routes>
  </BrowserRouter>
);
