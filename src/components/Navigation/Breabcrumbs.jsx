import { Link } from "react-router";

const Breabcrumbs = () => {
  return (
    <div>
      <div className="breadcrumbs text-sm my-4">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/san-pham"}>All Products</Link>
          </li>
          <li>Add Document</li>
        </ul>
      </div>
    </div>
  );
};

export default Breabcrumbs;
