import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h2>Error 404</h2>
      <Link to="/">Return on Home Page</Link>
    </div>
  );
};

export default NotFoundPage;
