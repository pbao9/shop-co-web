import { useState } from 'react'
import { Link } from 'react-router'
import SearchModals from '../Modals/SearchModals'
import SearchInput from '../Products/SearchInput'
import TopBar from './TopBar'
import { Bars3BottomLeftIcon, BellIcon } from '@heroicons/react/24/solid'

const HeaderDaisy = () => {
    const [showTopBar, setShowTopBar] = useState(true)
    return (
        <>
            {showTopBar && <TopBar onClose={() => setShowTopBar(false)} />}

            <div
                className={`navbar bg-base-100 shadow-md fixed ${
                    showTopBar ? 'top-[2.5rem]' : 'top-0'
                } z-[9999] transition-all duration-300`}
            >
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle"
                        >
                            <Bars3BottomLeftIcon className="size-6" />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <Link to={'/'}>Homepage</Link>
                            </li>
                            <li>
                                <a
                                    href="https://pbao9.github.io/"
                                    target="_blank"
                                >
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <Link to={'/info'}>Infomation</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost text-xl">SHOP.CO</a>
                </div>
                <div className="navbar-end">
                    <div className="hidden lg:block">
                        <SearchInput />
                    </div>
                    <div className="block lg:hidden">
                        <SearchModals />
                    </div>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <BellIcon className="size-5" />
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default HeaderDaisy
