import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h2>Welcome to HomePage!</h2>
      <p>
        Checkout your <Link to="/contacts">contacts</Link>
      </p>
    </div>
  );
};

export default HomePage;
