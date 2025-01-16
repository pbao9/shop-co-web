import { Outlet } from 'react-router'
import Footer from '../../components/Layouts/Footer'
import HeaderDaisy from '../../components/Layouts/HeaderDaisy'
const Master = () => {
    return (
        <div className="page-content">
            <HeaderDaisy />
            <div className="page m-auto py-[6.8rem]">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Master
