import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router'
import ProductCategory from '../../components/Products/ProductCategory'
import Breabcrumbs from '../../components/Navigations/Breabcrumbs'

const ProductDetail = () => {
    const { id } = useParams()
    const [productDetail, setProductDetail] = useState(null)

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => setProductDetail(data))
            .catch((error) => console.error('Lỗi không lấy được api', error))
    }, [id])
    if (!productDetail) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Sản phẩm - {productDetail.title}</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <Breabcrumbs />
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={productDetail.thumbnail}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold my-3">
                            {productDetail.title}
                        </h1>
                        <div className="badge badge-accent uppercase font-bold font-lexend">
                            {productDetail.category}
                        </div>
                        <p className="py-6">{productDetail.price + '$'}</p>
                        <div className="flex flex-row my-3">
                            <button className="btn btn-warning text-white mx-3">
                                Add to cart
                            </button>
                            <button className="btn btn-primary">Buy now</button>
                        </div>
                        <div className="my-3">
                            {productDetail.tags.map((tag, index) => (
                                <div
                                    className="badge badge-accent uppercase font-bold font-lexend mx-1"
                                    key={index}
                                >
                                    {tag}
                                </div>
                            ))}
                        </div>

                        <div tabIndex={0} className="collapse bg-base-200">
                            <div className="collapse-title text-xl font-medium bg-slate-500 text-white">
                                Description
                            </div>
                            <div className="collapse-content bg-slate-400 text-white py-5">
                                <p>{productDetail.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="font-bold font-lexend text-[2rem] my-3">
                Related Products
            </h1>
            <ProductCategory category={productDetail.category} />
        </div>
    )
}

export default ProductDetail
