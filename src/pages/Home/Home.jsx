import Banner from '../../components/Partials/Banner'
import Iphone from '../../components/Partials/Iphone'
import ProductCategory from '../../components/Products/ProductCategory'
import ProductList from '../../components/Products/ProductList'

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="test">
                <img
                    width={450}
                    src="https://marketing1.giaodienwebmau.com/wp-content/uploads/2022/03/section-2-shape-small-3.png"
                ></img>
            </div>
            <div className="container m-auto">
                <ProductList />
                <ProductCategory category={'motorcycle'} />
                <div className="my-[5rem]">
                    <Iphone
                        title={'Nội thất'}
                        description={'App bán hàng nội thất'}
                        image={'./public/images/iPhone-13-PRO-localhost.png'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
