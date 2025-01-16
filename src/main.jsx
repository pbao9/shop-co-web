import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home/Home.jsx'
import Dashboard from './pages/Users/Dashboard.jsx'
import Master from './pages/layout/Master.jsx'
import ProductDetail from './pages/Product/ProductDetail.jsx'
import SearchResults from './components/Products/SearchResults.jsx'
import Login from './pages/Auth/Login.jsx'
import Register from './pages/Auth/Register.jsx'
import NotFound from './pages/Errors/NotFound.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Master />}>
                <Route index element={<Home />} />
                <Route path="/nguoi-dung/:id" element={<Dashboard />} />
                <Route path="/san-pham/:id" element={<ProductDetail />} />
                <Route path="/tim-kiem" element={<SearchResults />} />
                <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/dang-nhap" element={<Login />} />
            <Route path="/dang-ky" element={<Register />} />
        </Routes>
    </BrowserRouter>
)
