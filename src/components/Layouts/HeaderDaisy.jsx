import { Link } from "react-router";
import SearchInput from "../Products/SearchInput";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";

const HeaderDaisy = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Shop</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link
          to={"/"}
          className="btn btn-ghost text-xl font-lexend text-[3rem]"
        >
          SHOP.CO
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Shop</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <SearchInput />

        <div className="gap-2 text-[1.1em] hidden xl:flex mx-5">
          <div className="indicator">
            <span className="indicator-item badge badge-secondary">99+</span>
            <button className="btn">
              <FaCartShopping />
            </button>
          </div>
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
              <FaRegUser />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a>Thông tin người dùng</a>
              </li>
              <hr className="my-3" />
              <li>
                <Link to={"/dang-ky"}>Đăng ký</Link>
              </li>
              <li>
                <Link to={"/dang-nhap"}>Đăng nhập</Link>
              </li>

              <li>
                <a>Đăng xuất</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDaisy;
