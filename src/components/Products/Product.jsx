import { Link } from "react-router";
import PropTypes from "prop-types";
const Product = ({ product }) => {
  return (
    <div className="card" key={product.id}>
      <Link to={`/san-pham/${product.id}`}>
        <div className="card-image">
          <img src={product.thumbnail ?? ""} alt={product.title} />
        </div>
        <div className="card-title">
          <p className="font-bold uppercase">{product.title}</p>
        </div>
      </Link>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
