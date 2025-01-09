import PropTypes from "prop-types";
import { useParams } from "react-router";

const Dashboard = () => {
  const { id } = useParams();
  return <div>Người dùng {id}</div>;
};

Dashboard.propTypes = {
  id: PropTypes.string,
};

export default Dashboard;
