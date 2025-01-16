import Banner from '../../components/Partials/Banner'
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
            </div>
        </div>
    )
}

export default Home
