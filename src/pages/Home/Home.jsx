import ProductList from '../../components/Products/ProductList'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'

const Home = () => {
    return (
        <div className="w-full">
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen rounded animate-gradient-x">
                <div className="flex  container min-h-screen m-auto items-center px-4 md:px-8 lg:px-16 flex-col lg:flex-row">
                    <div className="flex-1">
                        <h1 className="font-bold uppercase text-[2rem] md:text-[3rem] lg:text-[4rem] font-lexend">
                            Introduce Product Lorem
                        </h1>
                        <p className="font-lexend leading-8 text-sm md:text-base lg:text-lg">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an
                            <span className="font-bold text-red-500 uppercase px-1">
                                unknown printer took a galley
                            </span>
                            of type and scrambled it to make a type specimen
                            book...
                        </p>
                        <button className="btn btn-warning text-white my-5 flex items-center">
                            View more
                            <ArrowLongRightIcon className="w-6 h-6 ml-2" />
                        </button>
                        <div className="icon-section">
                            <div className="flex py-3 flex-wrap justify-around">
                                <div className="flex-1 mb-4">
                                    <div className="flex flex-col items-center">
                                        <img
                                            src="https://shop-co-web-three.vercel.app/images/burning.png"
                                            className="w-20 h-20 mb-3"
                                        />
                                        <h1 className="font-bold font-lexend">
                                            Faster
                                        </h1>
                                    </div>
                                </div>
                                <div className="flex-1 mb-4">
                                    <div className="flex flex-col items-center">
                                        <img
                                            src="https://shop-co-web-three.vercel.app/images/salary.png"
                                            className="w-20 h-20 mb-3"
                                        />
                                        <h1 className="font-bold font-lexend">
                                            Save money
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="flex py-3 flex-wrap justify-around">
                                <div className="flex-1 mb-4">
                                    <div className="flex flex-col items-center">
                                        <img
                                            src="./public/images/star.png"
                                            className="w-20 h-20 mb-3"
                                        />
                                        <h1 className="font-bold font-lexend">
                                            Legit
                                        </h1>
                                    </div>
                                </div>
                                <div className="flex-1 mb-4">
                                    <div className="flex flex-col items-center">
                                        <img
                                            src="https://shop-co-web-three.vercel.app/images/user-interface.png"
                                            className="w-20 h-20 mb-3"
                                        />
                                        <h1 className="font-bold font-lexend">
                                            Smooth user
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="macbook">
                            <div className="screen">
                                <div
                                    className="viewport"
                                    style={{
                                        backgroundImage:
                                            "url('https://shop-co-web-three.vercel.app/images/screen-page.png')",
                                    }}
                                ></div>
                            </div>
                            <div className="base"></div>
                            <div className="notch"></div>
                        </div>

                        <div className="flex pt-[3rem]">
                            <div className="flex-1 flex flex-col items-center">
                                <img
                                    src="https://shop-co-web-three.vercel.app/images/phoneframe.png"
                                    className="w-[200px] floating-animated-image"
                                />
                                <img
                                    src="https://shop-co-web-three.vercel.app/images/android.png"
                                    className="w-[10rem]"
                                />
                            </div>
                            <div className="flex-1 flex flex-col items-center">
                                <img
                                    src="https://shop-co-web-three.vercel.app/images/phoneframe.png"
                                    className="w-[200px] floating-animated-image"
                                />
                                <img
                                    src="https://shop-co-web-three.vercel.app/images/ios.png"
                                    className="w-[10rem]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="test">
                <img
                    width={450}
                    src="https://marketing1.giaodienwebmau.com/wp-content/uploads/2022/03/section-2-shape-small-3.png"
                ></img>
            </div>
            <div className="container m-auto">
                <ProductList />
            </div>
        </div>
    )
}

export default Home
