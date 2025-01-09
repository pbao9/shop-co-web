import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.jsx";
import Home from "./pages/Home/Home.jsx";
import Dashboard from "./pages/Users/Dashboard.jsx";
import Master from "./pages/layout/Master.jsx";
import ProductDetail from "./pages/Product/ProductDetail.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Master />}>
        <Route index element={<Home />} />
        <Route path="/nguoi-dung/:id" element={<Dashboard />} />
        <Route path="/san-pham/:id" element={<ProductDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
